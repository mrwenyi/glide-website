import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const prefix = '/glide-website/';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain' };
createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (path === '/') { res.writeHead(302, { Location: prefix }); return res.end(); }
    if (!path.startsWith(prefix)) { res.writeHead(404); return res.end('Not found'); }
    let file = resolve(root, path.slice(prefix.length));
    if (!file.startsWith(root + '/') && file !== root) { res.writeHead(403); return res.end(); }
    if (path.slice(prefix.length).split('/').some(part => part.startsWith('.'))) { res.writeHead(404); return res.end(); }
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!path.endsWith('/')) { res.writeHead(301, {Location: path + '/'}); return res.end(); }
      file = resolve(file, 'index.html');
    }
    res.writeHead(200, {'Content-Type': types[extname(file)] || 'application/octet-stream'});
    res.end(await readFile(file));
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(4178, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4178/glide-website/'));
