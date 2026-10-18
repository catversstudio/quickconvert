# QuickConvert — 100 Free Online Tools

**Live site:** https://quickconvert.freedev.app

QuickConvert is a privacy-first hub of **100 free browser tools** — PDF, image, text, calculator and developer utilities — built by [CatVers Studio](https://github.com/catversstudio).

- **100% private** — every tool runs entirely in the browser; no uploads, no tracking
- **No signup, no installs** — open a tool and use it
- **Free forever**

## Categories

| Category | Tools |
|---|---|
| PDF | 21 |
| Image | 21 |
| Text | 21 |
| Calculators | 22 |
| Developer | 15 |

## Structure

- `index.html` — the hub home page (search, category pills, 100 tool cards)
- `<tool-slug>/index.html` — each individual tool page, self-contained

Every page is a single self-contained HTML file: markup + styles + logic, with SEO meta tags, JSON-LD structured data, "How it works" guides and FAQs.

## Deploy

This is a static site. Serve the folder root with any static host (the live site runs on InfinityFree). Tool links are root-relative (`/pdf-to-jpg/`), so on a host that serves the repo at a sub-path, use a custom domain or rewrite accordingly.

## License

© CatVers Studio. All rights reserved.
