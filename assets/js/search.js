/* Site search: toggles the search bar in the header and searches
   the site's recipes and categories, showing matching links. */
(function () {
  var RECIPES = [
    { t: 'Christmas Cookies', c: 'Desserts & Baking', u: 'categories/desserts-baking.html' },
    { t: 'Christmas Dinner', c: 'Lunch & Dinner', u: 'categories/lunch-dinner.html' },
    { t: 'Christmas Appetizers', c: 'Appetizers & Snacks', u: 'categories/appetizers-snacks.html' },
    { t: 'Christmas Crockpot', c: 'Lunch & Dinner', u: 'categories/lunch-dinner.html' },
    { t: 'Christmas Ham', c: 'Lunch & Dinner', u: 'categories/lunch-dinner.html' },
    { t: 'New Year Appetizers', c: 'Appetizers & Snacks', u: 'categories/appetizers-snacks.html' },
    { t: "New Year's Eve Dinner", c: 'Lunch & Dinner', u: 'categories/lunch-dinner.html' },
    { t: 'New Year Desserts', c: 'Desserts & Baking', u: 'categories/desserts-baking.html' },
    { t: 'New Year Party Food', c: 'Appetizers & Snacks', u: 'categories/appetizers-snacks.html' },
    { t: 'A Cozy Welcome to The Tasty Recipe Co', c: 'Lunch & Dinner', u: 'posts/welcome-to-the-tasty-recipe-co.html' },
    { t: 'Breakfast & Brunch', c: 'Recipe category', u: 'categories/breakfast-brunch.html' },
    { t: 'Lunch & Dinner', c: 'Recipe category', u: 'categories/lunch-dinner.html' },
    { t: 'Desserts & Baking', c: 'Recipe category', u: 'categories/desserts-baking.html' },
    { t: 'Air Fryer Recipes', c: 'Recipe category', u: 'categories/air-fryer-recipes.html' },
    { t: 'Healthy Recipes', c: 'Recipe category', u: 'categories/healthy-recipes.html' },
    { t: 'Appetizers & Snacks', c: 'Recipe category', u: 'categories/appetizers-snacks.html' }
  ];

  var toggle = document.querySelector('.search-toggle');
  var bar = document.getElementById('search-bar');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var closeBtn = document.querySelector('.search-close');
  if (!toggle || !bar || !input || !results) return;

  /* Pages inside categories/ and posts/ need a ../ prefix on links. */
  var prefix = /\/categories\/|\/posts\//.test(location.pathname) ? '../' : '';

  function render(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { results.classList.remove('show'); results.innerHTML = ''; return; }
    var matches = RECIPES.filter(function (r) {
      return (r.t + ' ' + r.c).toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);
    if (!matches.length) {
      results.innerHTML = '<div class="no-result">No recipes found for &ldquo;' + q.replace(/</g, '&lt;') + '&rdquo; &mdash; try another word.</div>';
    } else {
      results.innerHTML = matches.map(function (r) {
        return '<a href="' + prefix + r.u + '"><b>' + r.t + '</b><span>' + r.c + '</span></a>';
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
