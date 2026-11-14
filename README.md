# The Tasty Recipe Co — Phase 1A site (LIVE on Vercel)

Live site: https://the-tasty-recipe-co.vercel.app — deployed 2026-11-14 from this repo's
main branch (Vercel project "the-tasty-recipe-co", team "shahnawaz"). Homepage, all 6
category pages, welcome article, sitemap.xml and robots.txt all verified live.

## What is ready
- `index.html` — homepage: brand, full-bleed photo hero, stats bar, category pills,
  latest-recipes card grid, image category cards, about teaser, Pinterest card, full footer
- `posts/welcome-to-the-tasty-recipe-co.html` — test article (NOT a keyword roundup): proper
  h1, meta, Article JSON-LD, breadcrumb Home › Recipes › Christmas & Holiday › title,
  byline, table of contents, tip box, Save to Pinterest link
- `categories/*.html` — one page per category (6 total, see below), each with a photo
  banner, card grid and the full footer
- `about.html`, `contact.html`, `privacy.html`
- `assets/css/style.css` — single stylesheet, mobile-responsive, no render-blocking bulk scripts
- `sitemap.xml`, `robots.txt`
- `assets/images/` — hero image + one generated photo per category (all under 100 KB),
  plus `favicon.svg`. Article/pin images go here, each under 100 KB per the prompt.

## Redesign (2026-11-14, user-ordered)
Redesigned after the reference site https://food.destinymatrixfree.com/ (Bite Bliss
Kitchen): same type of layout — category pills, photo recipe cards with tag + Save Pin,
date/time meta, title, excerpt and a footer link row; article pages with byline, table
of contents and tip boxes; a dark Pinterest card and a 4-column footer on every page.
The colour theme is deliberately different (deep emerald green + warm gold on soft sage
white, vs the reference's burnt orange + peach + cream), and the hero is different too:
a full-bleed photo hero with a dark-green overlay and centred headline, not the
reference's split text/photo hero. No text or images were copied from the reference —
only the layout pattern; all copy, photos and the brand are The Tasty Recipe Co's own.

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

## Live status (verified 2026-11-14)
- Production URL confirmed: https://the-tasty-recipe-co.vercel.app (no longer provisional).
- Pinterest account: The Tasty Recipe / @thetastyrecipeco
  (https://www.pinterest.com/thetastyrecipeco/). Needed for Phase 2 warm-up.
- **Timezone for Pinterest scheduling unconfirmed.** The prompt example says Asia/Karachi;
  the user's system timezone is Asia/Qyzylorda (+05:00). Confirm which one the Pinterest
  account should use before any CSV schedule is built.

## Next steps (Phase 1A done — 2026-11-14)
1. Categories approved by the user 2026-11-14 (6 categories, 30 articles planned). ✓
2. Files committed to https://github.com/rajashahnawaz680-stack/food (main branch). ✓
3. Repo imported in Vercel (project "the-tasty-recipe-co"), deployed from main. ✓
4. Verified live: homepage, all 6 category pages, welcome article, sitemap.xml, robots.txt. ✓
5. Next: Phase 3 keyword research + Phase 4 screening — Christmas first, then New Year
   (per the user's 2026-11-14 direction; Thanksgiving is skipped). Keywords are still
   unscreened candidates; no article starts before screening.

## What this draft deliberately does NOT do
- No keyword article yet (one keyword at a time, user gives the keyword; next article
  only starts after this test article is live-verified).
- No images yet, and no competitor photos downloaded — per the main chat, the prompt's
  Phase 5 competitor-photo method will NOT be used as written; licensed/generated images
  with credits instead.
- No Pinterest profile/board/domain changes; domain claim stays HELD until the user
  explicitly orders it.
- No alcohol/Halloween content.
