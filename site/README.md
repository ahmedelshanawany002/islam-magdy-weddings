# Islam Magdi Weddings

A three-page wedding photography portfolio: Home, Wedding Packages, Portfolio.
Built with Next.js, Tailwind CSS, and Framer Motion. No CMS, no database, no
admin dashboard — content is images in `/public` and two small config files
in `/lib`.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                     the 3 pages (Home, wedding-packages, portfolio)
components/              nav, hero motion, lightbox, portfolio grid, etc.
lib/site-config.ts       brand name, WhatsApp number + message, Instagram link
lib/packages.ts          the list of Wedding Packages images, in display order
lib/portfolio.ts         turns the portfolio manifest into grid data
lib/portfolio-manifest.json   auto-generated: each portfolio photo's real
                               width/height, so the grid never distorts them
public/home/hero.jpg           Home page hero image
public/packages/hero.jpg       Wedding Packages page hero image
public/packages/package-*.jpg  the finished pricing graphics
public/portfolio/*.jpg         all portfolio photos
public/README.md               step-by-step on replacing/adding/reordering images
```

## Updating content later (no code knowledge needed beyond this)

**Brand name, WhatsApp number/message, Instagram link:** edit the values at
the top of `lib/site-config.ts`.

**Images:** see `public/README.md` — it's a short, plain-language guide for
replacing the hero images, adding/removing/reordering package graphics, and
adding/removing/reordering portfolio photos.

After editing anything, redeploy (see below) for changes to go live.

## Deploying

The simplest path is [Vercel](https://vercel.com) (made by the creators of
Next.js, free for a site this size):

1. Push this project to a GitHub repository.
2. Import the repository at vercel.com → New Project.
3. Leave all settings on their defaults and click Deploy.
4. Every time you push a change (including replacing an image through
   GitHub's own web upload — no local setup required), the live site
   updates automatically within a minute or two.

You can also connect a custom domain to the Vercel project from its
Settings → Domains tab whenever you're ready.

## Notes on the build

- Portfolio images are served through Next.js's built-in image optimizer:
  automatically resized per device, lazy-loaded below the fold, and served
  as WebP/AVIF where the browser supports it — full-resolution files are
  never sent to a phone that only needs a thumbnail.
- Wedding Package graphics are displayed exactly as provided — nothing in
  this codebase re-creates or edits their text, prices, or layout.
- Motion is intentionally restrained: one entrance moment on the Home hero,
  a single fade-up per package image as you scroll, and considered hover/
  lightbox transitions in the Portfolio — no parallax, no WebGL.
