# Certiva — GH-300 Study Guide

A bilingual VitePress study guide for the GitHub Copilot GH-300 certification. The initial site contains six domain overviews, official references, and a hands-on lab in English and French.

## Prerequisites and local development

Use Node.js 24 LTS (see `.nvmrc`) and npm. From the repository root:

```sh
npm ci
npm run docs:dev
```

Open <http://localhost:5173/gh300-study-guide/> for English or <http://localhost:5173/gh300-study-guide/fr/> for French.

| Command | Purpose |
| --- | --- |
| `npm run docs:dev` | Start the development server with live reload |
| `npm run docs:build` | Build the static site and check internal Markdown links |
| `npm run docs:preview` | Serve the production build locally |

## Project structure

English pages live at the root of `docs/`, the default VitePress locale. French pages under `docs/fr/` mirror the English paths so the language switcher can open the corresponding page. Each of the six domain directories has a starter overview. Both locales also have resources and labs.

- `docs/.vitepress/config.ts` defines navigation, locales, search, and the GitHub Pages base path.
- `docs/.vitepress/theme/` contains shared styling.
- `docs/public/` contains static site assets.
- `.github/workflows/deploy.yml` builds and deploys the site.

## GitHub Pages

The workflow builds with `npm ci` and publishes `docs/.vitepress/dist`. It runs on updates to `main` and when explicitly dispatched. To enable hosting, select **GitHub Actions** as the publishing source under **Settings → Pages**. The expected address is <https://ahmedoumezzine.github.io/gh300-study-guide/>.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for paired translations, official sources, and pull request guidance.
