# Literature reviews and AI

Slides made with [Slidev](https://sli.dev) and the Aalto Scientific Computing theme (`slidev-theme-aalto-scicomp/`, included in this repo).

- Source: https://github.com/eglerean/litrev-with-ai
- Published slides: https://eglerean.github.io/litrev-with-ai/ (after GitHub Pages is turned on, see below)

## What's in the repo

| Path | What it is |
| --- | --- |
| `slides.md` | The slides. The headmatter at the top sets the theme, palette, footer credit and PDF metadata. |
| `public/` | Images and other static files, served from the site root. Refer to them as `/image.png`. Also holds `Glerean_2026_LitReview_AI.pdf`. |
| `slidev-theme-aalto-scicomp/` | A copy of the theme. Its `README.md` documents layouts, palettes and helpers. |
| `styles/index.ts` | Lets you switch palettes from the command line (`VITE_PALETTE`) |
| `.github/workflows/deploy.yml` | Builds the slides and publishes them on GitHub Pages |
| `package.json` | Slidev version (pinned to 0.47, which the theme was built and tested on) and npm scripts |

## 1. Set up

You need:

- **Node.js 18 or newer** and npm (check with `node -v`). On macOS, `brew install node`; otherwise see https://nodejs.org/.
- **git**, plus SSH access to GitHub if you will push.

Clone and install:

```bash
git clone git@github.com:eglerean/litrev-with-ai.git
cd litrev-with-ai
npm install
```

Don't run `npm init slidev` or upgrade `@slidev/cli`. The theme targets Slidev 0.47, and `package.json` pins it with `~0.47.5`.

## 2. Edit and preview

```bash
npm run dev
```

This opens http://localhost:3030, which reloads whenever you save `slides.md`.

- **Presenter view** (speaker notes, the next slide, a timer): http://localhost:3030/presenter
- **Jump to a slide:** http://localhost:3030/5
- **Overview:** press `o`. Arrow keys or space move between slides.
- **Stop:** `Ctrl+C`

Slides are separated by `---`. Each slide can start with frontmatter such as `layout: section`. For the available layouts, colours (`color: dark`) and classes, see `slidev-theme-aalto-scicomp/README.md`, and see `slidev-theme-aalto-scicomp/example.md` for examples.

## 3. Test before pushing

Run both of these. Each should finish without errors.

```bash
npm run build      # builds the static site into dist/ (what GitHub Pages serves)
npm run pdf        # exports the PDF to public/Glerean_2026_LitReview_AI.pdf
```

To check the built site the way GitHub Pages will serve it:

```bash
npx slidev build --base /litrev-with-ai/
npx vite preview --outDir dist --base /litrev-with-ai/
```

Then open the URL it prints and click through the slides. Check that images load, because broken image paths usually only show up here.

### PDF export

The PDF export needs a headless browser. Install it once:

```bash
npm i --no-save playwright-chromium
```

`npm run pdf` writes `public/Glerean_2026_LitReview_AI.pdf`, with a clickable table of contents. The footer's download link points to this file, so **regenerate the PDF and commit it whenever the slides change**. Fonts load from Google Fonts, so export while you're online. The finished PDF works offline, which makes it a good backup for the talk.

### Colour palettes

The deck uses the `aalto-classic` palette and Aalto-style titles (`palette` and `titles` under `themeConfig` in the `slides.md` headmatter). To try another palette without editing anything:

```bash
npm run dev:scicomp-web                     # scicomp.aalto.fi greys and blue
VITE_PALETTE=scicomp-web npm run export     # a PDF with that palette (written to slides-export.pdf)
```

## 4. Push to GitHub

```bash
git add -A
git commit -m "Describe your change"
git push
```

`node_modules/`, `dist/` and stray export files are ignored by `.gitignore`. `package-lock.json` and `public/Glerean_2026_LitReview_AI.pdf` are committed.

**Starting over in a new GitHub repo** (only if the `origin` remote doesn't exist yet):

```bash
gh repo create litrev-with-ai --public --source . --push   # with the GitHub CLI
# or create an empty repo on github.com, then:
git remote add origin git@github.com:USERNAME/litrev-with-ai.git
git push -u origin main
```

## 5. Publish on GitHub Pages

Do this once per repo: on GitHub, go to **Settings → Pages → Build and deployment → Source: GitHub Actions**. Then push again, or go to **Actions → Deploy slides → Run workflow**.

After that, every push to `main` runs `.github/workflows/deploy.yml`, which does `npm ci`, then `slidev build --base /<repo-name>/`, then deploys `dist/`. The slides update about a minute later at `https://<user>.github.io/<repo-name>/`. The **Actions** tab shows whether a build failed.

Notes:

- Pages on a private repo needs a paid GitHub plan, and anyone with the link can see the slides.
- The workflow uses `npm ci`, so `package-lock.json` must be committed and in sync with `package.json`. Run `npm install` after changing dependencies.
- The workflow does not build the PDF; it serves the committed `public/Glerean_2026_LitReview_AI.pdf`.

## Updating the theme

`slidev-theme-aalto-scicomp/` is a copy of the theme in `../aiagentresearchers2030`, which is newer than `../aaltoslidev`. Make theme changes in the original, then refresh the copy:

```bash
rsync -a --exclude node_modules --exclude package-lock.json --exclude dist \
  ../aiagentresearchers2030/slidev-theme-aalto-scicomp ./
```

Put tweaks that belong only to this deck in a `style.css` at the repo root (Slidev loads it automatically), so they survive theme updates.

## Licence

Slide content: CC BY 4.0, Enrico Glerean. Code: see `LICENSE`.
