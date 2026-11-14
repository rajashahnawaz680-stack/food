/* The Tasty Recipe Co — client-side pagination for recipe card grids.
   Each .grid[data-paginate] shows 15 cards per page (5 rows of 3).
   New article cards added to the grid are picked up automatically:
   the page numbers and the "Showing …" line update on their own.
   No JavaScript? All cards stay visible — pagination only hides cards
   when the script runs, so the page still works without it. */
(function () {
  function paginate(grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));
    var perPage = parseInt(grid.getAttribute('data-per-page') || '15', 10) || 15;
    var nav = document.getElementById(grid.getAttribute('data-nav') || '');
    var showing = document.getElementById(grid.getAttribute('data-showing') || '');
    if (!nav || !showing) return;
    var total = cards.length;
    var pages = Math.max(1, Math.ceil(total / perPage));
    var current = 1;

    function goTo(page) {
      current = Math.min(Math.max(1, page), pages);
      render();
      if (grid.scrollIntoView) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function button(label, disabled, onClick, isActive) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'page-btn' + (isActive ? ' active' : '');
      b.textContent = label;
      b.disabled = !!disabled;
      if (isActive) b.setAttribute('aria-current', 'page');
      b.addEventListener('click', onClick);
      return b;
    }

    function render() {
      var start = (current - 1) * perPage;
      var end = Math.min(start + perPage, total);
      cards.forEach(function (card, i) {
        card.style.display = (i >= start && i < end) ? '' : 'none';
      });
      nav.innerHTML = '';
      nav.appendChild(button('\u2039 Prev', current === 1, function () { goTo(current - 1); }));
      for (var p = 1; p <= pages; p++) {
        (function (page) {
          nav.appendChild(button(String(page), false, function () { goTo(page); }, page === current));
        })(p);
      }
      nav.appendChild(button('Next \u203a', current === pages, function () { goTo(current + 1); }));
      showing.textContent = 'Showing ' + (total === 0 ? 0 : start + 1) + '\u2013' + end +
        ' of ' + total + ' delicious recipes (Page ' + current + ' of ' + pages + ')';
    }

    render();
  }

  function init() {
    var grids = document.querySelectorAll('.grid[data-paginate]');
    Array.prototype.forEach.call(grids, paginate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
