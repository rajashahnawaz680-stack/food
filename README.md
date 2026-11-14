# The Tasty Recipe Co — Phase 1A site draft (NOT yet committed or deployed)

Prepared 2026-11-13 (Asia/Qyzylorda, 20:57 local) as a ready-to-commit static site for the
Pinterest master prompt's Phase 1A. Nothing here has been pushed to GitHub or Vercel yet.

## What is ready
- `index.html` — homepage: brand, hero, latest-articles grid, 6 category links, about blurb, footer
- `posts/welcome-to-the-tasty-recipe-co.html` — test article (NOT a keyword roundup): proper
  h1, meta, Article JSON-LD, breadcrumb Home › Recipes › Christmas & Holiday › title
- `categories/*.html` — one page per category (6 total, see below)
- `about.html`, `contact.html`, `privacy.html`
- `assets/css/style.css` — single stylesheet, mobile-responsive, no render-blocking bulk scripts
- `sitemap.xml`, `robots.txt`
- `assets/images/` — empty; article/pin images go here, each under 100 KB per the prompt

## Approved category list (given by the user 2026-11-14 — the verbatim list, 30 articles planned)
1. Quick & Easy Recipes — 6 articles — `categories/quick-easy-recipes.html`
2. Lunch & Dinner — 6 articles — `categories/lunch-dinner.html`
3. Desserts & Baking — 5 articles — `categories/desserts-baking.html`
4. Air Fryer & Healthy — 5 articles — `categories/air-fryer-healthy.html`
5. Christmas & Holiday — 6 articles — `categories/christmas-holiday.html`
6. Breakfast & Snacks — 2 articles — `categories/breakfast-snacks.html`

These replace the earlier 7-category proposal. Every later article must use one of these
exact categories. The article counts are the user's planned counts, not live articles —
only the welcome test article is live on the site so far.

## BEFORE committing — 3 things to fix/confirm
1. **Vercel production URL is PROVISIONAL.** `sitemap.xml` / `robots.txt` (and the welcome
   article's canonical, currently omitted) use `https://the-tasty-recipe-co.vercel.app`.
   Replace with the ACTUAL production URL once the repo is imported into Vercel, then
   re-verify sitemap + robots live. Do not claim the site is live until that URL loads.
2. **Pinterest account confirmed 2026-11-14:** The Tasty Recipe / @thetastyrecipeco
   (https://www.pinterest.com/thetastyrecipeco/). Needed for Phase 2 warm-up, not for the
   site build.
3. **Timezone for Pinterest scheduling unconfirmed.** The prompt example says Asia/Karachi;
   the user's system timezone is Asia/Qyzylorda (+05:00). Confirm which one the Pinterest
   account should use before any CSV schedule is built.

## Next steps (Phase 1A order)
1. Categories approved by the user 2026-11-14 (6 categories, 30 articles planned).
2. Commit these files to https://github.com/rajashahnawaz680-stack/food (main branch).
3. Import the repo in Vercel (signed in as rajashahnawaz680@gmail.com, team "shahnawaz",
   Hobby plan), deploy from main, confirm the production URL loads.
4. Verify live: homepage, all 6 category pages, welcome article, sitemap.xml, robots.txt.
5. Only then start Phase 3 keyword research — Christmas first, then New Year
   (per the user's 2026-11-14 direction; Thanksgiving is skipped).

## What this draft deliberately does NOT do
- No keyword article yet (one keyword at a time, user gives the keyword; next article
  only starts after this test article is live-verified).
- No images yet, and no competitor photos downloaded — per the main chat, the prompt's
  Phase 5 competitor-photo method will NOT be used as written; licensed/generated images
  with credits instead.
- No Pinterest profile/board/domain changes; domain claim stays HELD until the user
  explicitly orders it.
- No alcohol/Halloween content.
