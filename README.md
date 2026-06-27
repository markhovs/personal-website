# Personal Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

My personal website — [markhovs.com](https://markhovs.com). Built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/), statically exported and deployed to GitHub Pages.

Based on the excellent [mldangelo/personal-site](https://github.com/mldangelo/personal-site) template by [Michael D'Angelo](https://mldangelo.com).

## Tech stack

- **Next.js 16** (App Router, static export via `output: 'export'`)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Vitest** (tests) · **Biome + Prettier** (lint/format)
- Deployed to **GitHub Pages** at the custom domain `markhovs.com`

## Develop

Requires Node per [`.nvmrc`](./.nvmrc) (Node 20.19+ / 22.13+ / 24+).

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # Biome
npm run type-check   # tsc --noEmit
npm test             # Vitest
npm run build        # static export to ./out
```

## Content

Personal content lives in [`src/data/`](./src/data) (resume, projects, skills, courses, about, contact, stats) and blog posts in [`content/writing/*.md`](./content/writing). Most updates are data edits, not component changes.

## Deploy

Pushing to `main` triggers `.github/workflows/github-pages.yml`, which builds the static export and publishes it to GitHub Pages. The custom domain is set via [`public/CNAME`](./public/CNAME) and the repo's Settings → Pages. The GA4 id is injected from the `NEXT_PUBLIC_GA_TRACKING_ID` repository variable.

## Pulling upstream template updates

This repo tracks the upstream template via a git remote (this is **not** a GitHub fork — just a convenience remote, no dependency):

```bash
git remote add upstream https://github.com/mldangelo/personal-site.git   # one-time
git fetch upstream
git log --oneline main..upstream/main          # review what changed upstream
git merge upstream/main                         # then resolve conflicts
```

Conflicts are expected only in the files customized here — mainly `src/data/*`,
`public/CNAME`, site identity in `src/lib/utils.ts`, and analytics config.
Alternatively, cherry-pick specific upstream commits instead of a full merge.

## Acknowledgements

- Template by [@mldangelo](https://github.com/mldangelo): [mldangelo/personal-site](https://github.com/mldangelo/personal-site).
- Originally based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](https://html5up.net).
