/* QuickConvert Refresh — motion helpers (vanilla JS, no deps).
   1) Marks the homepage so its spotlight styles only apply there.
   2) Staggers the entrance of tool-page cards (--qc-i custom prop).
   3) Cursor spotlight on homepage tool cards: tracks the pointer
      into --mx / --my for the CSS radial highlight. */
(function () {
  var p = location.pathname;
  if (p === "/" || p === "/index.html") {
    document.documentElement.classList.add("qc-home");
  }
  var cards = document.querySelectorAll("main > .card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.setProperty("--qc-i", Math.min(i, 8));
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var spot = document.querySelectorAll(".grid .card");
  spot.forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  });
})();
