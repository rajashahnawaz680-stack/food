/* Site search: toggles the search bar in the header and searches
   the site's recipes and categories, showing matching links with
   a short description for each result. */
(function () {
  var RECIPES = [
    { t: 'Christmas Cookies', c: 'Desserts & Baking', u: 'categories/desserts-baking.html', d: 'Planned roundup — see the Desserts & Baking category.' },
    { t: 'Christmas Appetizers', c: 'Appetizers & Snacks', u: 'categories/appetizers-snacks.html', d: 'Planned roundup — see the Appetizers & Snacks category.' },
    { t: 'Christmas Crockpot', c: 'Lunch & Dinner', u: 'categories/lunch-dinner.html', d: 'Planned roundup — see the Lunch & Dinner category.' },
    { t: 'Christmas Ham', c: 'Lunch & Dinner', u: 'posts/christmas-ham-recipes.html', d: '12 glazed hams for the holiday table — brown sugar, honey, pineapple, slow cooker and more.' },
    { t: 'Christmas Prime Rib', c: 'Lunch & Dinner', u: 'posts/christmas-prime-rib-recipes.html', d: '12 prime rib roasts for the holiday table — garlic herb, reverse sear, horseradish crust and more.' },
    { t: 'New Year Appetizers', c: 'Appetizers & Snacks', u: 'categories/appetizers-snacks.html', d: 'Planned roundup — see the Appetizers & Snacks category.' },
    { t: "New Year's Eve Dinner", c: 'Lunch & Dinner', u: 'categories/lunch-dinner.html', d: 'Planned roundup — see the Lunch & Dinner category.' },
    { t: 'New Year Desserts', c: 'Desserts & Baking', u: 'categories/desserts-baking.html', d: 'Planned roundup — see the Desserts & Baking category.' },
    { t: 'New Year Party Food', c: 'Appetizers & Snacks', u: 'categories/appetizers-snacks.html', d: 'Planned roundup — see the Appetizers & Snacks category.' },
    { t: 'Welcome to The Tasty Recipe Co', c: 'Lunch & Dinner', u: 'posts/welcome-to-the-tasty-recipe-co.html', d: 'What this kitchen is for, and what is coming first.' },
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
      return (r.t + ' ' + r.c).toLowerCase().indexOf(q) !== -1;
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
