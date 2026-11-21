import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../src/assets/suyang-ma.jpg", import.meta.url));
const output = fileURLToPath(new URL("../public/images/favicon/", import.meta.url));
await mkdir(output, { recursive: true });
const { width, height } = await sharp(source).metadata();
const side = Math.min(width, height);
// Match the homepage's square object-fit: cover and object-position: 50% 20%.
const left = Math.round((width - side) * 0.5);
const top = Math.round((height - side) * 0.2);
const square = await sharp(source).extract({ left, top, width: side, height: side }).toBuffer();
const pngs = new Map();
for (const size of [16, 32, 48, 64, 180, 192, 256, 512]) {
  const radius = size * 8 / 320;
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="white"/></svg>`);
  pngs.set(size, await sharp(square).resize(size, size).ensureAlpha()
    .composite([{ input: mask, blend: "dest-in" }]).png().toBuffer());
}
for (const [size, name] of [[16, "favicon-16x16.png"], [32, "favicon-32x32.png"],
  [180, "apple-touch-icon.png"], [192, "android-chrome-192x192.png"], [512, "android-chrome-512x512.png"]]) {
  await writeFile(output + name, pngs.get(size));
}
const sizes = [16, 32, 48, 64, 256];
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [i, size] of sizes.entries()) {
  const entry = 6 + i * 16;
  const png = pngs.get(size);
  header[entry] = size === 256 ? 0 : size;
  header[entry + 1] = size === 256 ? 0 : size;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
}
const ico = Buffer.concat([header, ...sizes.map(size => pngs.get(size))]);
await writeFile(output + "favicon.ico", ico);
await writeFile(fileURLToPath(new URL("../public/favicon.ico", import.meta.url)), ico);
console.log("Generated portrait favicons with the approved homepage framing.");
