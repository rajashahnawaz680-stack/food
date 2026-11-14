/* The Tasty Recipe Co — mobile menu toggle for the green nav bar.
   On small screens the nav bar is hidden until the "Menu" button
   is tapped; on desktop the button is hidden and the bar is always shown. */
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? '\u2715 Close' : '\u2630 Menu';
  });
})();
