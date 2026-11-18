# The Tasty Recipe Co — Phase 1A site (LIVE on Vercel)

Live site: https://the-tasty-recipe-co.vercel.app — deployed 2026-11-14 from this repo's
main branch (Vercel project "the-tasty-recipe-co", team "shahnawaz"). Homepage, all 6
category pages, welcome article, sitemap.xml (16 URLs) and robots.txt all verified live.

## What is ready
- `index.html` — homepage: brand, full-bleed photo hero, category pills,
  latest-recipes card grid, image category cards, about teaser, Pinterest card, full footer
  (the stats bar was removed 2026-11-14)
- `posts/welcome-to-the-tasty-recipe-co.html` — test article (NOT a keyword roundup): proper
  h1, meta, Article JSON-LD, breadcrumb Home › Recipes › Lunch &amp; Dinner › title,
  byline, table of contents, tip box, Save to Pinterest link
- `categories/*.html` — one page per category (6 total, see below), each with a photo
  banner, card grid and the full footer
- `about.html`, `contact.html`, plus 6 legal pages: `privacy.html`, `terms.html`,
  `cookies.html`, `disclaimer.html`, `editorial-policy.html`, `affiliate-disclosure.html`
- `404.html` — custom Page Not Found page (not listed in sitemap.xml)
- `assets/css/style.css` — single stylesheet, mobile-responsive, no render-blocking bulk scripts
- `sitemap.xml`, `robots.txt`
- `assets/images/` — 10 images (2 hero photos, about-kitchen, one photo per category,
  plus the logo badge), all under 100 KB, plus `favicon.svg`. Article/pin images go here,
  each under 100 KB per the prompt.

## Redesign (2026-11-14, user-ordered)
Redesigned after the reference site https://food.destinymatrixfree.com/ (Bite Bliss
Kitchen): same type of layout — category pills, photo recipe cards with tag + Save Pin,
date/time meta, title, excerpt and a footer link row; article pages with byline, table
of contents and tip boxes; a dark Pinterest card and a 4-column footer on every page.
The colour theme is deliberately different (warm terracotta and paprika on cream — the
Harvest Paprika theme, vs the reference's burnt orange + peach + cream), and the hero is
different too: a full-bleed photo hero with a warm brown overlay and centred headline, not
the reference's split text/photo hero. No text or images were copied from the reference —
only the layout pattern; all copy, photos and the brand are The Tasty Recipe Co's own.

## Approved category list (replaced by the user 2026-11-14 — the new verbatim list, 30 articles planned)
1. Breakfast & Brunch — 5 articles — `categories/breakfast-brunch.html`
2. Lunch & Dinner — 6 articles — `categories/lunch-dinner.html`
3. Desserts & Baking — 5 articles — `categories/desserts-baking.html`
4. Air Fryer Recipes — 5 articles — `categories/air-fryer-recipes.html`
5. Healthy Recipes — 4 articles — `categories/healthy-recipes.html`
6. Appetizers & Snacks — 5 articles — `categories/appetizers-snacks.html`

These replace the previous 6-category list (Quick & Easy Recipes, Air Fryer & Healthy,
Christmas & Holiday, Breakfast & Snacks are removed; Christmas/New Year roundups now live
under Lunch & Dinner, Desserts & Baking, Appetizers & Snacks and Breakfast & Brunch).
Every later article must use one of these exact categories. The article counts are the
user's planned counts, not live articles — only the welcome test article is live on the
site so far (filed under Lunch & Dinner).

## Live status (verified 2026-11-14)
- Production URL confirmed: https://the-tasty-recipe-co.vercel.app (no longer provisional).
- Pinterest account: The Tasty Recipe / @thetastyrecipeco
  (https://www.pinterest.com/thetastyrecipeco/). Needed for Phase 2 warm-up.
- **Timezone for Pinterest scheduling unconfirmed.** The prompt example says Asia/Karachi;
  the user's system timezone is Asia/Qyzylorda (+05:00). Confirm which one the Pinterest
  account should use before any CSV schedule is built.

## Next steps (Phase 1A done — 2026-11-14)
1. Categories replaced by the user 2026-11-14 (new set of 6, 30 articles planned — Breakfast & Brunch 5, Lunch & Dinner 6, Desserts & Baking 5, Air Fryer Recipes 5, Healthy Recipes 4, Appetizers & Snacks 5). ✓
2. Files committed to https://github.com/rajashahnawaz680-stack/food (main branch). ✓
3. Repo imported in Vercel (project "the-tasty-recipe-co"), deployed from main. ✓
4. Verified live: homepage, all 6 category pages, welcome article, sitemap.xml, robots.txt. ✓
5. Next: Phase 3 keyword research + Phase 4 screening — Christmas first, then New Year
   (per the user's 2026-11-14 direction; Thanksgiving is skipped). Keywords are still
   unscreened candidates; no article starts before screening.

## What this draft deliberately does NOT do
- No keyword article yet (one keyword at a time, user gives the keyword; next article
  only starts after this test article is live-verified).
- 10 generated images now live in `assets/images/` (hero, about, one per category, logo
  badge); no competitor photos downloaded — per the main chat, the prompt's
  Phase 5 competitor-photo method will NOT be used as written; licensed/generated images
  with credits instead.
- No Pinterest profile/board/domain changes; domain claim stays HELD until the user
  explicitly orders it.
- No alcohol/Halloween content.
