/* QuickConvert PWA: service-worker registration + install button */
(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }
  var standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (standalone) return;
  var deferred = null;
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = '\u26A1 Install app';
  btn.setAttribute('aria-label', 'Install QuickConvert app');
  btn.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:9999;display:none;align-items:center;gap:6px;' +
    'background:#FFC900;color:#08090B;border:none;border-radius:999px;padding:12px 20px;' +
    'font:600 15px "DM Sans",system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.35);cursor:pointer;';
  document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(btn); });
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    btn.style.display = 'inline-flex';
  });
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    btn.style.display = 'inline-flex';
  }
  btn.addEventListener('click', async function () {
    if (deferred) {
      deferred.prompt();
      try { await deferred.userChoice; } catch (e) {}
      deferred = null;
      btn.style.display = 'none';
    } else if (isIOS) {
      alert('Install QuickConvert: tap the Share button, then "Add to Home Screen". After that it opens like an app and works offline.');
    }
  });
  window.addEventListener('appinstalled', function () { btn.style.display = 'none'; });
})();
