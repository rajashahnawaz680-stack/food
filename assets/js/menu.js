/* The Tasty Recipe Co — header dropdown menus (Recipes / Holidays).
   On touch screens there is no hover, so tapping a dropdown button
   toggles its menu; tapping anywhere else or pressing Escape closes it.
   The nav bar itself is always visible (no hamburger on mobile). */
(function () {
  var drops = document.querySelectorAll('.nav-drop');
  if (!drops.length) return;

  function closeAll(except) {
    drops.forEach(function (drop) {
      if (drop !== except) {
        drop.classList.remove('open');
        var b = drop.querySelector('.nav-drop-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  }

  drops.forEach(function (drop) {
    var btn = drop.querySelector('.nav-drop-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = !drop.classList.contains('open');
      closeAll(drop);
      drop.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-drop')) closeAll(null);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });
})();
