import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'dist', 'figma-snapshots');

const filesToCopy = [
  'figma-export.html',
  'figma-export-full.html',
  'figma-export-header.html',
  'figma-export-appmockups.html',
  'figma-export-footer.html',
  'figma-layer-map.json',
  'figma-import.md'
];

async function ensureDir(path) {
  await fs.mkdir(path, { recursive: true });
}

async function copyFiles() {
  await ensureDir(outDir);
  for (const f of filesToCopy) {
    const src = join(root, f);
    const dest = join(outDir, f);
    try {
      await fs.copyFile(src, dest);
      console.log('Copied', f);
    } catch (err) {
      console.error('Missing file, skipping:', f);
    }
  }

  // generate a simple index.html
  const links = filesToCopy
    .filter(async (f) => {
      try {
        await fs.access(join(outDir, f));
        return true;
      } catch {
        return false;
      }
    });

  const indexHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Figma Snapshots</title>
    <style>body{font-family:Inter, system-ui, Arial;padding:24px}</style>
  </head>
  <body>
    <h1>Figma Snapshots</h1>
    <ul>
      ${filesToCopy.map((f) => `<li><a href="./${f}" target="_blank">${f}</a></li>`).join('\n      ')}
    </ul>
  </body>
</html>`;

  await fs.writeFile(join(outDir, 'index.html'), indexHtml, 'utf8');
  console.log('Wrote index.html');
}

copyFiles().catch((err) => {
  console.error(err);
  process.exit(1);
});
