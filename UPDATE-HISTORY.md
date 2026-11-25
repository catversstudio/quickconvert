<h1 align="center">📜 QuickConvert — Update History</h1>

<p align="center"><em>Every version of QuickConvert, with dates and what changed — newest first.</em></p>

<p align="center">
  <img src="https://img.shields.io/badge/Current%20version-v3%20·%20PWA-FFC900?style=for-the-badge" alt="Current version v3">
  <img src="https://img.shields.io/badge/Live-quickconvert--tools.pages.dev-08090B?style=for-the-badge" alt="Live site">
</p>

---

## ⚡ v3 — Installable Offline App (PWA) · 25 November 2026

QuickConvert is no longer just a website — it is now an **installable web app** that works **offline**.

| | |
|---|---|
| **Released** | 25 Nov 2026, ~7:04 PM IST (GitHub) |
| **Commits** | `5c50b74` (PWA core) · `300359b` (icons) · `c2287ac` (cleanup) |

**What changed**

- 📱 **Installable app** — new web app manifest: QuickConvert can be installed on a phone's home screen and opens full-screen like a native app, with its own icon and shortcuts (EMI Calculator, PDF Merger, Age Calculator, Image Compressor)
- 🔌 **Works offline** — a service worker saves all 101 tool pages, the shared design files and the tools' PDF/image libraries on first visit; after that every tool runs with **no internet at all**
- 🔔 **"Install app" button** — a gold install button appears on every page when the browser offers installation, with Add-to-Home-Screen guidance on iPhone
- 🎨 **App icons** — new 192px, 512px and maskable icons in the site's own midnight-and-bolt identity
- 🧹 **Cleanup** — a stray leftover copy of the old Image Resizer page (`image-resizer/index-old.html/`) was removed
- ✅ **Tested** — offline test passed locally: homepage, EMI Calculator and PDF Merger all loaded with the internet off, and the EMI calculation stayed exact (₹10,00,000 at 8.5% for 20 years = ₹8,678/month)

---

## 🎨 v2 — The Refresh · 11–12 November 2026

A complete new look for the whole site, applied to **all 117 pages** through one shared design layer.

| | |
|---|---|
| **Released** | 11 Nov 2026, ~7:10 PM UTC (GitHub) |
| **Commits** | `d929970` (refresh) · `9193097` (header fix) |

**What changed**

- 🌑 **New colour system** — Midnight `#08090B` + Paper `#F5F3EF` + Golden Yellow `#FFC900`
- ✍️ **New typography** — Space Grotesk for headings, DM Sans for body text
- 🧭 **Cleaner headers** — every tool header now carries only the logo and the tool's own name, with a compact round back button; the rest moved to the footer
- 🃏 **Bigger, clearer tool cards** on the hub, with search and category filters

---

## 🚀 v1 — The Original Site · 18 October 2026

The first full release of QuickConvert: **100 free online tools** that run 100% in the browser.

| | |
|---|---|
| **Released** | 18 Oct 2026, ~4:04 PM IST (GitHub) |
| **Commits** | `cc2e5e0` (initial) · `1aba6b0` (full site) |

**What it launched with**

- 🧰 **100 tools** — 21 PDF, 21 image, 21 text, 22 calculators and 15 developer tools, each on its own clean page (`/emi-calculator/`, `/pdf-merger/`, …)
- 🔒 **Privacy by design** — every tool runs entirely on the visitor's device; no uploads, no sign-up, no tracking
- 🏠 **The hub** — one home page with search, category pills and all 100 tool cards
- ☁️ **30 Oct 2026 — moved to Cloudflare Pages**: the live site moved to https://quickconvert-tools.pages.dev and every old `freedev.app` link across the site was replaced

---

<p align="center"><sub>QuickConvert is built by <a href="https://github.com/catversstudio">CatVers Studio</a> · <a href="https://quickconvert-tools.pages.dev">quickconvert-tools.pages.dev</a></sub></p>
