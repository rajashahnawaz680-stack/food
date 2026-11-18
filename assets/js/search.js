/* Site search: toggles the search bar in the header and searches
   the site's recipes and categories, showing matching links with
   a short description for each result. */
(function () {
  var RECIPES = [
    { t: '35+ Easy Christmas Appetizers for a Crowd', c: 'Appetizers & Snacks', u: 'posts/easy-christmas-appetizers-for-a-crowd.html', d: '35+ easy appetizers for a crowd — dips, bites, cheese boards and warm starters.' },
    { t: '30+ Christmas Cookie Recipes Everyone Will Love', c: 'Desserts & Baking', u: 'posts/christmas-cookie-recipes.html', d: '30+ Christmas cookies everyone will love — classic, chocolate, spiced, filled and decorated.' },
    { t: '25+ No-Bake Christmas Desserts for a Crowd', c: 'Desserts & Baking', u: 'posts/no-bake-christmas-desserts-for-a-crowd.html', d: '25+ no-bake Christmas desserts for a crowd — truffles, cheesecakes, bars and treats.' },
    { t: 'Breakfast & Brunch', c: 'Recipe category', u: 'categories/breakfast-brunch.html', d: 'Browse roundups in this category.' },
    { t: 'Lunch & Dinner', c: 'Recipe category', u: 'categories/lunch-dinner.html', d: 'Browse roundups in this category.' },
    { t: 'Desserts & Baking', c: 'Recipe category', u: 'categories/desserts-baking.html', d: 'Browse roundups in this category.' },
    { t: 'Air Fryer Recipes', c: 'Recipe category', u: 'categories/air-fryer-recipes.html', d: 'Browse roundups in this category.' },
    { t: 'Healthy Recipes', c: 'Recipe category', u: 'categories/healthy-recipes.html', d: 'Browse roundups in this category.' },
    { t: 'Appetizers & Snacks', c: 'Recipe category', u: 'categories/appetizers-snacks.html', d: 'Browse roundups in this category.' }
  ];

  var toggle = document.querySelector('.search-toggle');
  var bar = document.getElementById('search-bar');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var closeBtn = document.querySelector('.search-close');
  if (!toggle || !bar || !input || !results) return;

  /* Result links are root-relative so search works from every page,
     including the 404 page served at any path depth. */
  var prefix = '/';

  function render(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { results.classList.remove('show'); results.innerHTML = ''; return; }
    var matches = RECIPES.filter(function (r) {
      return (r.t + ' ' + r.c + ' ' + r.d).toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);
    if (!matches.length) {
      results.innerHTML = '<div class="no-result">No recipes found &mdash; try another search or <a class="no-result-link" href="' + prefix + 'index.html#categories">browse our categories</a>.</div>';
    } else {
      results.innerHTML = matches.map(function (r) {
        return '<a href="' + prefix + r.u + '"><span class="sr-main"><b>' + r.t + '</b><span class="sr-desc">' + r.d + '</span></span><span>' + r.c + '</span></a>';
      }).join('');
    }
    results.classList.add('show');
  }

  function open() {
    bar.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    input.focus();
  }
  function close() {
    bar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    input.value = '';
    results.classList.remove('show');
    results.innerHTML = '';
  }

  toggle.addEventListener('click', function () {
    if (bar.classList.contains('open')) close(); else open();
  });
  closeBtn.addEventListener('click', close);
  input.addEventListener('input', function () { render(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
  document.addEventListener('click', function (e) {
    if (bar.classList.contains('open') && !bar.contains(e.target) && !toggle.contains(e.target)) close();
  });
})();
