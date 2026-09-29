// Regenerates lib/portfolio-manifest.json from whatever image files exist
// in /public/portfolio, in filename order. Run with `npm run manifest`
// after adding, removing, or renumbering portfolio photos.
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { imageSize } from "image-size";

const dir = join(process.cwd(), "public", "portfolio");
const outFile = join(process.cwd(), "lib", "portfolio-manifest.json");

const files = readdirSync(dir)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .filter((f) => statSync(join(dir, f)).isFile())
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const manifest = files.map((file) => {
  const { width, height } = imageSize(join(dir, file));
  return { file, width, height };
});

writeFileSync(outFile, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Wrote ${manifest.length} images to ${outFile}`);
