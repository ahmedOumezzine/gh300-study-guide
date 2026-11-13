# Certiva — GH-300 Study Guide

Prepare for the **GitHub Copilot (GH-300)** certification with bilingual study notes, hands-on practice, and official references. Commencez par les six domaines de compétences, puis mettez vos acquis en pratique dans un atelier.

| | English | Français |
| --- | --- | --- |
| **Study guide / Guide d’étude** | [Open the guide](https://ahmedoumezzine.github.io/gh300-study-guide/) | [Ouvrir le guide](https://ahmedoumezzine.github.io/gh300-study-guide/fr/) |
| **Hands-on lab / Atelier pratique** | [Compare two prompts](https://ahmedoumezzine.github.io/gh300-study-guide/labs/) | [Comparer deux requêtes](https://ahmedoumezzine.github.io/gh300-study-guide/fr/labs/) |
| **Certiva practice exams / Examens blancs Certiva** | [Practice for GH-300](https://certiva.oumezzine.com/en/exams/github-copilot-gh-300-practice) | [Préparer GH-300](https://certiva.oumezzine.com/fr/examens/preparation-certification-gh-300) |

## What you’ll study / Au programme

| English | Français |
| --- | --- |
| [Responsible AI](docs/responsible-ai/index.md) | [IA responsable](docs/fr/responsible-ai/index.md) |
| [Copilot features](docs/copilot-features/index.md) | [Fonctionnalités de Copilot](docs/fr/copilot-features/index.md) |
| [Data and architecture](docs/data-architecture/index.md) | [Données et architecture](docs/fr/data-architecture/index.md) |
| [Prompt engineering](docs/prompt-engineering/index.md) | [Conception des requêtes](docs/fr/prompt-engineering/index.md) |
| [Developer productivity](docs/developer-productivity/index.md) | [Productivité des développeurs](docs/fr/developer-productivity/index.md) |
| [Privacy and safeguards](docs/privacy-safeguards/index.md) | [Confidentialité et protections](docs/fr/privacy-safeguards/index.md) |

Use the [official Microsoft Learn exam objectives](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300) to plan your study and [GitHub Docs](https://docs.github.com/en/copilot) to check current Copilot behavior.

Consultez les [objectifs officiels en français](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300) pour planifier votre révision et la [documentation GitHub](https://docs.github.com/fr/copilot) pour vérifier le fonctionnement actuel de Copilot.

## Local development / Développement local

Use **Node.js 24 LTS** (see [`.nvmrc`](.nvmrc)) and **npm**. Exécutez les commandes suivantes à la racine du dépôt.

```sh
npm ci
npm run docs:dev
```

Open the local guide in [English](http://localhost:5173/gh300-study-guide/) or [français](http://localhost:5173/gh300-study-guide/fr/). If VitePress selects another port, use the address printed in the terminal.

| Command | Purpose / Utilité |
| --- | --- |
| `npm run docs:dev` | Start the development server / Démarrer le serveur local |
| `npm run docs:build` | Build the site and validate internal Markdown links / Générer le site et vérifier les liens Markdown internes |
| `npm run docs:preview` | Preview the generated site after building / Prévisualiser le site généré |

## Repository layout / Structure du dépôt

| Path / Chemin | Contents / Contenu |
| --- | --- |
| [`docs/`](docs/) | English pages / Pages en anglais |
| [`docs/fr/`](docs/fr/) | French pages at matching relative paths / Pages en français avec les mêmes chemins relatifs |
| [`docs/.vitepress/`](docs/.vitepress/) | VitePress configuration, navigation, search, and theme |
| [`docs/public/`](docs/public/) | Static assets / Fichiers statiques |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | GitHub Pages deployment / Déploiement GitHub Pages |

## Deployment / Déploiement

GitHub Pages uses **GitHub Actions** as its publishing source. The workflow runs on pushes to `main` or on manual dispatch and publishes `docs/.vitepress/dist` under `/gh300-study-guide/`. Check the [workflow history](https://github.com/ahmedOumezzine/gh300-study-guide/actions/workflows/deploy.yml) for build and deployment status.

## Contributing / Contribution

See [CONTRIBUTING.md](CONTRIBUTING.md) for updating study notes, reporting outdated features, proposing translations, and submitting pull requests. Pour modifier une page, vérifiez aussi la page équivalente dans l’autre langue.
