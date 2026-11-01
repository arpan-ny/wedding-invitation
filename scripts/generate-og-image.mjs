import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, extname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { site } from "../src/data/site.config.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "public", "og-image.svg");
const outputPath = join(root, "public", "og-image.png");
const logoPath = join(root, "public", site.hero.logoSrc);
const mimeTypes = {
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
};
const mimeType = mimeTypes[extname(logoPath).toLowerCase()];

if (!mimeType) {
  throw new Error("The social preview logo must be a PNG or JPEG image.");
}

const logo = readFileSync(logoPath).toString("base64");
const svg = readFileSync(svgPath, "utf8");
const imageReferences = svg.match(/xlink:href="[^"]+"/g) ?? [];

if (imageReferences.length !== 1) {
  throw new Error(`Expected exactly one logo reference in ${svgPath}.`);
}

const embeddedSvg = svg.replace(
  imageReferences[0],
  `xlink:href="data:${mimeType};base64,${logo}"`,
);
const temporaryDirectory = mkdtempSync(join(tmpdir(), "wedding-og-image-"));

try {
  const temporarySvgPath = join(temporaryDirectory, "og-image.svg");
  writeFileSync(temporarySvgPath, embeddedSvg);
  execFileSync("sips", [
    "-s",
    "format",
    "png",
    temporarySvgPath,
    "--out",
    outputPath,
  ]);
  if (!existsSync(outputPath)) {
    throw new Error(`Social preview image was not generated at ${outputPath}.`);
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
