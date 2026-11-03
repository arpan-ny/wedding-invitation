# Lakshita & Arpan — wedding site

A single-page, config-driven wedding website built with Vite, React, Tailwind CSS v4, and Motion. It deploys to GitHub Pages.

[Hosted website](https://arpan-ny.github.io/wedding-invitation/)

## Edit the site (non-technical)

English guest-facing content and contact details live in:

[`src/data/site.config.js`](src/data/site.config.js)

Change names, the hashtag, dates, invitation copy, event line-up, venue, contact names and phone numbers, photos, music path, footer text, navigation labels, and the default colour theme there. Hindi translations live in [`src/data/locales.js`](src/data/locales.js).

The site includes an English/Hindi language switch in the top-right corner. Update both the English content and its Hindi translation when changing guest-facing copy.

Keep `navItems[].id` in sync with section ids (`hero`, `invitation`, `countdown`, `lineup`, `venue`, `gallery`, `contact`).

Also update `siteUrl` and `meta` in that file so WhatsApp / Open Graph previews point at your live GitHub Pages URL.

The share preview uses `public/og-image.png` (1200 × 630). Its editable SVG artwork is `public/og-image.svg` and includes the hero logo. After changing the logo or preview artwork, regenerate the PNG from the repository root on macOS with:

```bash
npm run generate:og
```

## Swap photos

1. Add files under `public/photos/` (JPG, PNG, or SVG).
2. Update `gallery.photos` in `src/data/site.config.js` with `src`, descriptive `alt`, `width`, and `height`.
3. Keep `src` relative to `public/`, for example `photos/ceremony.jpg`.

Placeholder SVGs ship so the gallery works before real photographs exist.

Background music: replace `public/music/celebration.wav` or change `music.src` in the config. Music never autoplays; it starts after a tap on the floating control.

## Change the hero logo

Replace `public/images/arpan-lakshita-logo.png` with your own transparent PNG logo (keep the same filename), or update `hero.logoSrc` in `src/data/site.config.js`.

## Deploy to GitHub Pages

1. Make sure this repository is available at `arpan-ny/wedding-invitation` (transfer it there or create it under that account and push this project).
2. In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. This one-time step is required before the workflow can deploy.
3. Push to `main`, or run **Deploy to GitHub Pages** from the **Actions** tab. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to that branch.
4. Open [https://arpan-ny.github.io/wedding-invitation/](https://arpan-ny.github.io/wedding-invitation/) after the workflow finishes. You can follow progress in the repository’s **Actions** tab.

The workflow sets `VITE_BASE_PATH` to `/<repository-name>/`, which is required for this **project** site (`https://<user>.github.io/<repo>/`).

If you rename the repository, the workflow will use its new name as the base path; update `siteUrl` in `src/data/site.config.js` to match the new Pages URL.

## The base-path rule

GitHub Pages project sites serve from `/<repo>/`. If Vite’s `base` does not match, every asset 404s and the page can look blank.

`vite.config.js` uses:

```js
base: process.env.VITE_BASE_PATH || "/"
```

Verify locally:

```bash
# PowerShell
$env:VITE_BASE_PATH="/test/"; npm run build
```

Then confirm `dist/index.html` references assets under `/test/assets/...`.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Preview themes

Palettes are listed in `site.themes`. The default is `defaultTheme`.

Append a query parameter:

`http://localhost:5173/?theme=marigold`

Available ids: `marigold`, `ruby`, `emerald`, `sapphire`, `lotus`.
