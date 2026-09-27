import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const svgPath = path.join(projectRoot, 'public/assets/branding/google-play-header.svg');
const outPng4096 = path.join(projectRoot, 'public/assets/branding/google-play-header.png');
const outPng2048 = path.join(projectRoot, 'public/assets/branding/google-play-header-2048.png');
const outJpg4096 = path.join(projectRoot, 'public/assets/branding/google-play-header.jpg');

async function build() {
  console.log('Reading SVG:', svgPath);
  const svgBuffer = fs.readFileSync(svgPath);

  // 1. Generate 4096x2304 PNG (24-bit RGB, flatten alpha with #FCFAF7 to guarantee no transparency)
  console.log('Generating 4096x2304 PNG...');
  await sharp(svgBuffer, { density: 150 })
    .resize(4096, 2304)
    .flatten({ background: '#FCFAF7' })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPng4096);
  console.log('Saved:', outPng4096);

  // 2. Generate 2048x1152 PNG
  console.log('Generating 2048x1152 PNG...');
  await sharp(svgBuffer, { density: 75 })
    .resize(2048, 1152)
    .flatten({ background: '#FCFAF7' })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPng2048);
  console.log('Saved:', outPng2048);

  // 3. Generate 4096x2304 JPG (high-quality fallback)
  console.log('Generating 4096x2304 JPG...');
  await sharp(svgBuffer, { density: 150 })
    .resize(4096, 2304)
    .flatten({ background: '#FCFAF7' })
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(outJpg4096);
  console.log('Saved:', outJpg4096);

  console.log('All Google Play Developer Profile header assets successfully generated!');
}

build().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
