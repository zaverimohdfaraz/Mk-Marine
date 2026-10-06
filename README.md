# MK Marine Services — Website + Operations Portal

Next.js (App Router) + TypeScript + Tailwind implementation of the design
system reviewed earlier, covering **Phase 1** (public website) and the
first slice of **Phase 2–4** (portal shell, dashboard, clients, vessels,
enquiries, product selector, important notes) from the master spec.

Everything currently runs on **in-memory demo data** (`lib/demo-data.ts`)
and a **cookie-based demo login** (`lib/auth.ts`) — there is no database
and no real authentication yet. That's intentional: this is the phase
where we validate the UI and flows before wiring up MongoDB. See "What's
not real yet" below before showing this to anyone outside the team.

---

## 1. Running it locally

You'll need **Node.js 18.18+** (Node 20 LTS recommended) and npm.

```bash
cd mk-marine
npm install
npm run dev
```

Then open **http://localhost:3000** — that's the public website.

The portal lives at **http://localhost:3000/portal/login** — click either
"Mr. Kersi" or "Mr. Patel" to sign in (no password yet, see below) and
you'll land on the dashboard. You can also reach it from the public site
via the small "Portal" link in the top-right of the header.

If `npm install` fails on a fresh machine, delete `node_modules` and
`package-lock.json` (if one has been generated) and try again — and make
sure your Node version is 18.18 or newer (`node -v`).

## 2. What to click through

**Public site**
- `/` — homepage
- `/services`, `/marine-spare-parts`, `/vessel-support`, `/about`, `/contact`
- `/request-quote` — the public enquiry form (currently just shows a
  confirmation on submit; nothing is saved yet — see below)

**Portal** (after logging in as either user)
- `/portal/dashboard` — the "what needs my attention" screen
- `/portal/clients` and `/portal/clients/[id]`
- `/portal/vessels`
- `/portal/enquiries`, `/portal/enquiries/[id]`, and `/portal/enquiries/new`
  (the full step-by-step flow with the product selector — try adding
  products and watching the summary panel update live)
- `/portal/important-notes`
- `/portal/products` (marine product catalogue)
- `/portal/quotations`, `/portal/quotations/[id]` — line items with cost
  vs. selling price, client-facing notes kept separate from internal
  notes, margin calculation
- `/portal/sales`, `/portal/sales/[id]` — sale + payment status, margin
- `/portal/purchases`, `/portal/purchases/[id]` — supplier purchase orders
- `/portal/payments` — Client/Supplier tabs, totals, transaction table
- `/portal/suppliers`, `/portal/suppliers/[id]` — products supplied,
  purchase history
- `/portal/reports` — filter bar, key stat cards, quotation pipeline
- `/portal/tasks`
- `/portal/settings` — Users table, Roles & Permissions matrix, company
  info, audit log note

The **shared-activity behavior** described in the spec (Mr. Kersi does
something, Mr. Patel sees it) is represented in the demo data — e.g. the
dashboard's "Important for You" and "Recent Activity" panels — but since
there's no database yet, actions you take in the New Enquiry flow don't
actually persist or show up for the other "user." That's the next milestone
(see Phase 3 below).

## 3. Project structure

```
app/
  page.tsx                    Public homepage
  services/, about/, contact/, marine-spare-parts/,
  vessel-support/, request-quote/     Public pages
  portal/
    login/page.tsx            Demo login (no shell/sidebar)
    page.tsx                  Redirects /portal → /portal/login
    (shell)/                  Route group: everything with sidebar+topbar
      layout.tsx              Sidebar + Topbar shell
      dashboard/
      clients/, clients/[id]/
      vessels/
      enquiries/, enquiries/[id]/, enquiries/new/
      important-notes/
      products/
      quotations/, sales/, purchases/, payments/,
      suppliers/, reports/, settings/, tasks/    Phase 5–7 (mostly stubs)
components/
  ui/          Shared design-system components (Button, StatusBadge,
               PriorityTag, CurrentStatus, ActivityTimeline, Panel, etc.)
  portal/      Sidebar, Topbar
  site/        SiteHeader, SiteFooter
lib/
  types.ts         Shared TypeScript types for the domain model
  demo-data.ts     ALL demo data lives here — clients, vessels, products,
                   enquiries, notes, activity, tasks. Swap this out for
                   real database queries in Phase 3.
  auth.ts          Demo login server action (sets a cookie)
  current-user.ts  Reads the demo "logged in as" cookie
public/
  logo.jpg         Your uploaded logo
middleware.ts      Blocks /portal/* without the demo login cookie
.eslintrc.json     Next's recommended lint rules (avoids the interactive
                   setup prompt on first `next lint`)
```

The `(shell)` folder is a Next.js **route group** — the parentheses mean
it doesn't appear in the URL, it just lets `/portal/login` opt out of the
sidebar/topbar layout that every other `/portal/*` page uses.

## 4. Design system in code

The colors, type scale and component styles match the mockup you already
reviewed:

- Colors are defined once in `tailwind.config.ts` (`navy`, `ocean`, `gold`,
  `ink`, `border`, etc.) — change them there and they update everywhere.
- Fonts: **Fraunces** (headlines, `font-display`) and **Inter** (everything
  else, default) are loaded via `next/font/google` in `app/layout.tsx` —
  no manual `<link>` tags needed, and they self-host at build time.
- Reusable pieces are in `components/ui/`: `StatusBadge` and `PriorityTag`
  (text + color, never color-only), `CurrentStatus` (used identically on
  Enquiry today, and ready to reuse on Client/Vessel/Quotation/Sale),
  `ActivityTimeline`, `Panel` (the card+header wrapper used everywhere),
  `ComingSoon` (the honest placeholder for not-yet-built modules).

## 5. What's not real yet (please read before running further with this)

This is a **Phase 1–4 UI scaffold**, not a production app. Specifically:

- **Auth is a placeholder.** `lib/auth.ts` sets a cookie with no password
  and no session expiry — anyone can pick either user. `middleware.ts`
  now blocks any `/portal/*` page from loading without that cookie
  (redirecting to `/portal/login`), and the topbar has a working "Sign
  out" button — but this is still just a cookie check, not a real
  session. Before this goes anywhere near production it needs real
  authentication: hashed passwords, server-side sessions, and proper
  route protection (see spec section 60–61). This is Phase 2 hardening
  work.
- **No database.** Everything reads from `lib/demo-data.ts` in memory.
  Creating an enquiry in `/portal/enquiries/new` shows a success screen
  but doesn't save anywhere or show up for the other user — that's
  Phase 3 (MongoDB + Mongoose/Prisma models from the spec's Section 55).
- **Request a Quote** on the public site doesn't yet create a portal
  enquiry — that wiring is the "Public → Private workflow" in the spec
  (Section 49), planned for once the database is in.
- **Activity feed is static demo data**, not generated from real actions.
- **Privacy/Terms/Cookies pages** exist (so the footer links don't 404)
  but hold placeholder copy — replace with your real policies.
- Every module now has a full front-end UI (Quotations, Sales, Purchases,
  Payments, Suppliers, Reports, Settings included) — but none of it reads
  or writes a real database yet. Buttons like "Send to Client," "Record
  Payment," "Mark as Received," "Add User" etc. are all present and
  styled, but don't yet perform the action — that's exactly the Phase
  5–7 backend wiring described below.

## 6. Suggested next steps (in spec order)

1. Run this locally, click through everything, and flag anything that
   feels off — spacing, copy, colors, missing states, whatever. Easiest
   to fix now before backend work starts.
2. Phase 3: wire up MongoDB Atlas + Mongoose/Prisma using the models in
   `lib/types.ts` as the starting schema, replace `lib/demo-data.ts`
   reads with real queries.
3. Phase 2 hardening: replace `lib/auth.ts` with real authentication.
4. Phase 4: make the New Enquiry flow actually persist, and have the
   dashboard/activity feed reflect real actions across both users.
5. Phases 5–7: Quotations, Sales, Purchases, Payments, Suppliers,
   Reports, Settings/Roles/Audit Log.

## 7. A note on running things here vs. locally

This project was built and hand-reviewed for correctness, but it has
**not been through `npm install` / `npm run build`** in the environment
it was created in (no network access there). Everything has been written
carefully against Next.js 14 App Router conventions, but if `npm run dev`
surfaces an error, paste it back and it can be fixed quickly — that's
expected for a first local run of a scaffold this size.

## 8. Photography

The homepage hero, the "In the Field" gallery, and the Marine Spare Parts
page use real marine photography — cargo ship, port/crane, industrial
pipework — sourced from Unsplash (free under the [Unsplash
License](https://unsplash.com/license), no permission or payment needed).
They're loaded directly from `images.unsplash.com` via plain `<img>` tags,
so you'll need internet access when running `npm run dev` for them to
load. 