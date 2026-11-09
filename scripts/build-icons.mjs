// Renders raster icons and the default OG image from public/favicon.svg.
// Run with: node scripts/build-icons.mjs
import { readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';

const root = new URL('../', import.meta.url);
const pub = (name) => new URL(`public/${name}`, root);

const PAPER = '#eef1f4';
const INK = '#1c2430';
const MUTED = '#5b6676';
const HIGHLIGHT = '#f2e14c';

const fontFiles = [
  'node_modules/@kfonts/maruburi/src/MaruBuri-Regular.ttf',
  'node_modules/@kfonts/maruburi/src/MaruBuri-Bold.ttf',
].map((p) => new URL(p, root).pathname);

const favicon = await readFile(pub('favicon.svg'), 'utf8');
// resvg ignores media queries; strip the dark-mode block so the light ink is used.
const markInner = favicon
  .replace(/<style>[\s\S]*?<\/style>/, '')
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .replaceAll('class="ink"', `fill="${INK}"`);

function render(svg, width) {
  return new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'MaruBuri' },
  })
    .render()
    .asPng();
}

/** Wrap a single PNG into an .ico container (PNG-in-ICO, supported everywhere since Vista). */
function pngToIco(png, size) {
  const header = Buffer.alloc(6 + 16);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  header.writeUInt8(size, 6);
  header.writeUInt8(size, 7);
  header.writeUInt8(0, 8); // palette
  header.writeUInt8(0, 9); // reserved
  header.writeUInt16LE(1, 10); // color planes
  header.writeUInt16LE(32, 12); // bits per pixel
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(header.length, 18);
  return Buffer.concat([header, png]);
}

const transparentMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${markInner}</svg>`;
await writeFile(pub('favicon.ico'), pngToIco(render(transparentMark, 32), 32));

// iOS fills transparency with black, so the touch icon gets an opaque paper tile.
const touchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${PAPER}"/>
  <g transform="translate(26 22) scale(4)">${markInner}</g>
</svg>`;
await writeFile(pub('apple-touch-icon.png'), render(touchIcon, 180));

const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <g transform="translate(96 96) scale(4)">${markInner}</g>
  <path fill="${HIGHLIGHT}" d="M90 382 L612 364 L606 418 L96 430 Z"/>
  <text x="96" y="404" font-family="MaruBuri" font-weight="700" font-size="132" fill="${INK}">LeoLog</text>
  <text x="100" y="496" font-family="MaruBuri" font-weight="400" font-size="44" fill="${MUTED}">기록으로 기억하기</text>
</svg>`;
await writeFile(pub('og.png'), render(og, 1200));

console.log('favicon.ico, apple-touch-icon.png, og.png written');
