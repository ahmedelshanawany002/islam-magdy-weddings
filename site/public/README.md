# Updating images (no dashboard needed)

Everything the site shows lives in these three folders. To change content,
replace or add files here and redeploy (see main README for how).

## /public/home
- `hero.jpg` — the single Home page background. Replace this file (keep the
  name `hero.jpg`) to change it. No code edit needed.

## /public/packages
- `hero.jpg` — the Wedding Packages page banner image.
- `package-1.jpg`, `package-2.jpg`, `package-3.jpg` — the finished
  pricing/package graphics, shown exactly as provided, in this order.
- To add a new package image: drop the file in this folder (e.g.
  `package-3.jpg`), then add one line for it in `/lib/packages.ts` (copy the
  pattern of the existing entries — just the filename, alt text, and the
  image's width/height in pixels).
- To remove one: delete the file and delete its matching line in
  `/lib/packages.ts`.
- To replace one: overwrite the file with the same name (dimensions can
  differ — update width/height in `/lib/packages.ts` if they do).

## /public/portfolio
- `01.jpg` … `39.jpg` — all portfolio photos, displayed in this numeric
  order.
- To add photos: drop new files in, run `npm run manifest` (regenerates
  `/lib/portfolio-manifest.json` with each photo's real width/height so the
  grid never distorts them), then redeploy.
- To remove a photo: delete its file, then run `npm run manifest` again.
- To reorder: rename the files so their numbers reflect the order you want
  (e.g. swap `03.jpg` and `07.jpg`), then run `npm run manifest` again.
- Mixed portrait/landscape photos are handled automatically — no extra
  config needed.
