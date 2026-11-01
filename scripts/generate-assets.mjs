import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../src/data/site.config.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const photosDir = join(root, "public", "photos");
const musicDir = join(root, "public", "music");
mkdirSync(photosDir, { recursive: true });
mkdirSync(musicDir, { recursive: true });

const palettes = [
  ["#faf3e8", "#e09a1a", "#9b1d2a", "#c9a227"],
  ["#fde8ea", "#c41e3a", "#7a1024", "#c9a227"],
  ["#e7f5ea", "#0f7a4a", "#14532d", "#c9a227"],
  ["#e8eef8", "#1e4d8c", "#1e3a5f", "#c9a227"],
  ["#fde8f0", "#c2185b", "#831843", "#c9a227"],
  ["#fff7ed", "#d97706", "#9a3412", "#ca8a04"],
  ["#f5f3ff", "#7c3aed", "#5b21b6", "#c9a227"],
  ["#ecfeff", "#0e7490", "#155e75", "#c9a227"],
];

function photoSvg(index, [bg, a, b, gold]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img">
  <rect width="800" height="600" fill="${bg}"/>
  <circle cx="160" cy="140" r="90" fill="${a}" opacity="0.55"/>
  <circle cx="640" cy="460" r="120" fill="${b}" opacity="0.45"/>
  <circle cx="400" cy="300" r="70" fill="${gold}" opacity="0.7"/>
  <path d="M400 210 C430 250 430 350 400 390 C370 350 370 250 400 210 Z" fill="${a}"/>
  <path d="M310 300 C350 270 450 270 490 300 C450 330 350 330 310 300 Z" fill="${b}"/>
  <text x="400" y="540" text-anchor="middle" font-size="28" fill="${b}" font-family="Georgia, serif">Portrait ${index}</text>
</svg>
`;
}

palettes.forEach((palette, i) => {
  const n = String(i + 1).padStart(2, "0");
  writeFileSync(join(photosDir, `${n}.svg`), photoSvg(n, palette));
});

writeFileSync(
  join(root, "public", "og-image.svg"),
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${site.couple.partnerA} and ${site.couple.partnerB} — Wedding Celebration</title>
  <desc id="desc">${site.meta.description}</desc>
  <rect width="1200" height="630" fill="#fbf0f4"/>
  <rect x="24" y="24" width="1152" height="582" rx="24" fill="none" stroke="#c9a227" stroke-width="2"/>
  <rect x="34" y="34" width="1132" height="562" rx="18" fill="none" stroke="#831843" stroke-width="1" opacity=".4"/>
  <image xlink:href="${site.hero.logoSrc}" x="30" y="24" width="590" height="582" preserveAspectRatio="xMidYMid meet"/>
  <g text-anchor="middle" font-family="Georgia, 'Times New Roman', serif">
    <path d="M702 147 H825 M975 147 H1098" stroke="#c9a227" stroke-width="1.5"/>
    <path d="M900 139 l8 8 -8 8 -8 -8Z" fill="#c9a227"/>
    <text x="900" y="124" font-size="20" letter-spacing="3" fill="#8a4d68">TOGETHER WITH THEIR FAMILIES</text>
    <text x="900" y="253" font-size="61" fill="#831843">${site.couple.partnerA}</text>
    <text x="900" y="311" font-size="42" fill="#c9a227">&amp;</text>
    <text x="900" y="373" font-size="61" fill="#831843">${site.couple.partnerB}</text>
    <path d="M755 408 H1045" stroke="#c9a227" stroke-width="1.5"/>
    <text x="900" y="463" font-size="31" fill="#3b1024">${site.displayDate.replace(" - ", " – ")}</text>
    <text x="900" y="509" font-size="25" fill="#8a4d68">${site.events[0].venue}</text>
    <text x="900" y="542" font-size="21" fill="#8a4d68">${site.city}</text>
    <text x="900" y="578" font-size="19" letter-spacing="1" fill="#831843">${site.hashtag}</text>
  </g>
</svg>
`,
);

writeFileSync(
  join(root, "public", "favicon.svg"),
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="#faf3e8"/>
  <circle cx="16" cy="16" r="7" fill="#e09a1a"/>
  <circle cx="16" cy="16" r="3" fill="#c9a227"/>
</svg>
`,
);

function writeWav(filePath, seconds = 10) {
  const sampleRate = 22050;
  const n = sampleRate * seconds;
  const data = Buffer.alloc(n * 2);
  for (let i = 0; i < n; i += 1) {
    const t = i / sampleRate;
    const env = Math.min(1, t * 3) * Math.min(1, (seconds - t) * 0.5);
    const sample =
      Math.sin(2 * Math.PI * 392 * t) * 0.12 +
      Math.sin(2 * Math.PI * 493.88 * t) * 0.1 +
      Math.sin(2 * Math.PI * 587.33 * t) * 0.08;
    data.writeInt16LE(Math.max(-1, Math.min(1, sample * env)) * 28000, i * 2);
  }
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + data.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(data.length, 40);
  writeFileSync(filePath, Buffer.concat([header, data]));
}

writeWav(join(musicDir, "celebration.wav"));
writeFileSync(join(root, "public", ".nojekyll"), "");
console.log("assets written");
