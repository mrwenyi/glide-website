import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const imageSize = bytes => {
  if (bytes.subarray(1, 4).toString() === 'PNG') return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
  assert.equal(bytes.readUInt16BE(0), 0xffd8, 'Screenshot must be a PNG or JPEG');
  let offset = 2;
  while (offset < bytes.length) {
    const marker = bytes.readUInt16BE(offset);
    offset += 2;
    if ([0xffc0, 0xffc2].includes(marker)) return [bytes.readUInt16BE(offset + 5), bytes.readUInt16BE(offset + 3)];
    offset += bytes.readUInt16BE(offset);
  }
  throw new Error('Missing screenshot dimensions');
};
const pages = ['index.html', 'download/index.html', 'help/index.html', 'privacy/index.html', 'en/index.html', 'en/download/index.html', 'en/help/index.html', 'en/privacy/index.html'];

test('all eight routes are statically readable and their local links work under the project subpath', () => {
  for (const page of pages) {
    assert.ok(existsSync(resolve(root, page)), `Missing static route: ${page}`);
    const html = readFileSync(resolve(root, page), 'utf8');
    assert.match(html, /<h1[\s>]/);
    assert.match(html, page.startsWith('en/') ? /lang="en"/ : /lang="zh-CN"/);
    for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https:|#|mailto:)/.test(url)) continue;
      assert.ok(!url.startsWith('/'), `Root-relative URL breaks Pages subpath: ${page}: ${url}`);
      const path = resolve(root, dirname(page), url.split('#')[0].split('?')[0] || '.');
      assert.ok(existsSync(path), `Broken URL: ${page}: ${url}`);
      if (url.endsWith('/')) assert.ok(existsSync(resolve(path, 'index.html')), `Missing directory index: ${url}`);
    }
  }
});

test('downloads expose the exact release assets, checksums and honest availability', () => {
  for (const locale of ['', 'en/']) {
    const path = resolve(root, locale, 'download/index.html');
    assert.ok(existsSync(path), 'Download page must be generated');
    const html = readFileSync(path, 'utf8');
    for (const name of ['Glide-Mac-0.1.24.pkg', 'Glide-Windows-x64-0.2.8.zip', 'Glide-Windows-arm64-0.2.8.zip']) assert.ok(html.includes(name));
    assert.match(html, /releases\/download\/mac-v0\.1\.24-preview\//);
    assert.match(html, /releases\/download\/windows-v0\.2\.8-preview\//);
    assert.match(html, /SHA256SUMS/);
    assert.match(html, /<button[^>]+disabled/);
    assert.ok(!html.includes('Glide-iOS-0.1.19-development.zip'));
    assert.match(html, locale ? /not notarized/ : /未公证/);
    assert.match(html, locale ? /not been tested on Windows hardware/ : /尚未完成 Windows 真机验收/);
  }
});

test('privacy explains local audio persistence and does not promise zero storage', () => {
  for (const locale of ['', 'en/']) {
    const path = resolve(root, locale, 'privacy/index.html');
    assert.ok(existsSync(path), 'Privacy page must be generated');
    const html = readFileSync(path, 'utf8');
    assert.match(html, /com\.example\.macremote\/recordings/);
    assert.match(html, /MobileRemote/);
    assert.match(html, /manifest\.json/);
    assert.match(html, locale ? /not automatically deleted/ : /不会自动删除/);
    assert.match(html, locale ? /third-party/ : /第三方/);
  }
});

test('interface screenshots use their real dimensions and each feature has its own current view', () => {
  for (const locale of ['', 'en/']) {
    const html = readFileSync(resolve(root, locale, 'index.html'), 'utf8');
    // Overlaying invented controls makes the screenshot misrepresent the product.
    assert.ok(!/Glide workspace|phone-demo|landscape-demo/.test(html), 'Do not cover real screenshots with invented UI');
    for (const [, src, width, height] of html.matchAll(/<img src="([^"]+)" width="(\d+)" height="(\d+)"/g)) {
      if (!src.includes('control-')) continue;
      const [actualWidth, actualHeight] = imageSize(readFileSync(resolve(root, locale, src)));
      assert.equal(Number(width), actualWidth, `Incorrect intrinsic width: ${src}`);
      assert.equal(Number(height), actualHeight, `Incorrect intrinsic height: ${src}`);
    }
    const json = html.match(/<script id="feature-data" type="application\/json">(.*?)<\/script>/)[1];
    const features = JSON.parse(json);
    assert.equal(new Set(features.map(f => f.src)).size, 4, 'Every feature must switch to its corresponding screenshot');
    for (const feature of features) {
      const [width, height] = imageSize(readFileSync(resolve(root, locale, feature.src)));
      assert.equal(feature.width, width);
      assert.equal(feature.height, height);
      assert.match(feature.src, new RegExp(`control-${feature.id}-${locale ? 'en' : 'zh'}\\.jpg$`));
    }
  }
});
