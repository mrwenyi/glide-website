import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
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
