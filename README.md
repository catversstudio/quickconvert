<h1 align="center">⚡ QuickConvert</h1>

<h3 align="center">100 free online tools — right in your browser. Now an installable offline app.</h3>

<p align="center">
  <a href="https://quickconvert-tools.pages.dev"><img src="https://img.shields.io/badge/🌐_Live_Site-quickconvert--tools.pages.dev-08090B?style=for-the-badge" alt="QuickConvert live website"></a>
  <a href="UPDATE-HISTORY.md"><img src="https://img.shields.io/badge/⚡_Version-v3_·_PWA-FFC900?style=for-the-badge" alt="QuickConvert v3 — PWA"></a>
  <a href="UPDATE-HISTORY.md"><img src="https://img.shields.io/badge/📜_Update_History-v1_→_v3-173F35?style=for-the-badge" alt="QuickConvert update history"></a>
</p>

<p align="center"><strong>🌐 Live website:</strong> https://quickconvert-tools.pages.dev</p>

---

## ✨ What's new in v3 — the PWA update (25 Nov 2026)

- 📱 **Install it like an app** — add QuickConvert to your home screen; it opens full-screen with its own icon
- 🔌 **Works 100% offline** — open the site once, and every tool is saved on your device; no internet needed after that
- 🔔 **Gold "Install app" button** on every page when your browser offers it

Full details of every version: **[📜 UPDATE-HISTORY.md](UPDATE-HISTORY.md)**

## 📱 About

QuickConvert is a privacy-first hub of **100 free browser tools** — PDF, image, text, calculator and developer utilities — built by [CatVers Studio](https://github.com/catversstudio).

- **100% private** — every tool runs entirely in your browser; no uploads, no tracking
- **No signup** — open a tool and use it
- **Free forever**

## 🧰 Categories

| Category | Tools |
|---|---|
| 📄 PDF | 21 |
| 🖼️ Image | 21 |
| ✍️ Text | 21 |
| 🧮 Calculators | 22 |
| 💻 Developer | 15 |

## 📂 Structure

- `index.html` — the hub home page (search, category pills, 100 tool cards)
- `<tool-slug>/index.html` — each individual tool page, self-contained
- `manifest.webmanifest` + `sw.js` + `icons/` — the PWA layer (install + offline)
- `UPDATE-HISTORY.md` — every version, dated, with its changes

Every page is a single self-contained HTML file: markup + styles + logic, with SEO meta tags, JSON-LD structured data, "How it works" guides and FAQs.

## 🚀 Deploy

This is a static site. Serve the folder root with any static host (the live site runs on Cloudflare Pages at quickconvert-tools.pages.dev). Tool links are root-relative (`/pdf-to-jpg/`), so on a host that serves the repo at a sub-path, use a custom domain or rewrite accordingly.

## 📄 License

© CatVers Studio. All rights reserved.

---

<p align="center">Part of the <a href="https://catversstudio.pages.dev">CatVers Studio</a> family, alongside <a href="https://github.com/catversstudio/myexpensesapp">My Expenses</a>, <a href="https://github.com/catversstudio/age-calculator">Age Calculator</a> and <a href="https://github.com/catversstudio/mundarisamaj">Mundari Samaj</a>.</p>
