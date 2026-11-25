/* QuickConvert service worker — offline-first PWA. Bump VERSION on every site update. */
const VERSION = 'qc-pwa-v1-2026-11-25';
const PRECACHE = [
 "/",
 "/age-calculator/",
 "/assets/pwa.js",
 "/assets/qc-refresh.css",
 "/assets/qc-refresh.js",
 "/attendance-calculator/",
 "/average-calculator/",
 "/barcode-generator/",
 "/base64-encoder-decoder/",
 "/base64-to-image/",
 "/bmi-calculator/",
 "/character-counter/",
 "/color-picker/",
 "/compound-interest-calculator/",
 "/css-formatter-minifier/",
 "/csv-to-json/",
 "/csv-viewer/",
 "/date-difference-calculator/",
 "/discount-calculator/",
 "/emi-calculator/",
 "/favicon-generator/",
 "/fuel-cost-calculator/",
 "/gpa-calculator/",
 "/gst-calculator/",
 "/hash-generator/",
 "/heic-to-jpg/",
 "/html-formatter/",
 "/html-to-markdown/",
 "/ico-to-png/",
 "/icons/icon-192.png",
 "/icons/icon-512-maskable.png",
 "/icons/icon-512.png",
 "/image-background-remover/",
 "/image-blur-tool/",
 "/image-color-palette-extractor/",
 "/image-compressor/",
 "/image-converter/",
 "/image-cropper/",
 "/image-meme-generator/",
 "/image-metadata-viewer/",
 "/image-pixelator/",
 "/image-resizer/",
 "/image-resizer/index-old.html/",
 "/image-rotator/",
 "/image-to-base64/",
 "/image-to-ico/",
 "/image-to-webp/",
 "/image-watermark/",
 "/index.html",
 "/javascript-minifier/",
 "/jpg-to-pdf/",
 "/json-formatter/",
 "/json-to-csv/",
 "/lorem-ipsum-generator/",
 "/manifest.webmanifest",
 "/markdown-to-html/",
 "/marks-percentage-calculator/",
 "/number-base-converter/",
 "/number-to-words/",
 "/password-generator/",
 "/pdf-comparison-tool/",
 "/pdf-compressor/",
 "/pdf-grayscale-converter/",
 "/pdf-header-footer-adder/",
 "/pdf-image-extractor/",
 "/pdf-lock/",
 "/pdf-merger/",
 "/pdf-metadata-editor/",
 "/pdf-page-deleter/",
 "/pdf-page-number-adder/",
 "/pdf-page-reorder/",
 "/pdf-rotator/",
 "/pdf-splitter/",
 "/pdf-to-jpg/",
 "/pdf-to-png/",
 "/pdf-to-text/",
 "/pdf-to-word/",
 "/pdf-unlock/",
 "/pdf-watermark-adder/",
 "/percentage-calculator/",
 "/profit-loss-calculator/",
 "/qr-code-generator/",
 "/ratio-calculator/",
 "/reading-time-calculator/",
 "/regex-tester/",
 "/remove-duplicate-lines/",
 "/resume-builder/",
 "/scientific-calculator/",
 "/sentence-counter/",
 "/speed-distance-time-calculator/",
 "/svg-to-png/",
 "/text-case-converter/",
 "/text-cleaner/",
 "/text-diff-checker/",
 "/text-reverser/",
 "/text-sorter/",
 "/text-to-slug/",
 "/text-to-speech/",
 "/time-calculator/",
 "/unit-converter/",
 "/url-encoder-decoder/",
 "/url-parser/",
 "/uuid-generator/",
 "/voice-recorder/",
 "/webp-to-jpg/",
 "/website-meta-tag-generator/",
 "/word-counter/",
 "/word-frequency-counter/",
 "/word-to-pdf/",
 "/xml-formatter/"
];
const EXTERNAL = [
 "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap",
 "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/mathjs/12.4.0/math.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/jsdiff/5.2.0/diff.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/exif-js/2.3.0/exif.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/bwip-js/4.3.0/bwip-js-min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify.min.js",
 "https://cdn.jsdelivr.net/npm/terser@5.31.6/dist/bundle.min.js",
 "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js",
 "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js",
 "https://cdn.jsdelivr.net/npm/@neslinesli93/qpdf-wasm@0.3.0/dist/qpdf.js",
 "https://cdn.jsdelivr.net/npm/@neslinesli93/qpdf-wasm@0.3.0/dist/qpdf.wasm",
 "https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js",
 "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js",
 "https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js",
 "https://cdn.jsdelivr.net/npm/mathjs@12.4.0/lib/browser/math.min.js",
 "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js",
 "https://cdn.jsdelivr.net/npm/exif-js@2.3.0/exif.min.js",
 "https://cdn.jsdelivr.net/npm/js-beautify@1.15.1/js/lib/beautify.min.js",
 "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await Promise.allSettled(PRECACHE.map((u) => cache.add(u)));
    await Promise.allSettled(EXTERNAL.map((u) => cache.add(u)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
    if (hit) {
      // refresh in background for next time
      fetch(req).then((res) => { if (res && (res.status === 200 || res.type === 'opaque')) cache.put(req, res.clone()); }).catch(() => {});
      return hit;
    }
    try {
      const res = await fetch(req);
      if (res && (res.status === 200 || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    } catch (err) {
      if (req.mode === 'navigate') {
        const home = await cache.match('/');
        if (home) return home;
      }
      throw err;
    }
  })());
});
