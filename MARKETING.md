# Clefmark — Marketing Website

**Status:** v0.1 one-page live in repo — multi-page IA deferred  
**Repo path:** `c:\Clefmark-website` (sibling to product app `c:\Clefmark`)  
**Domain:** `clefmark.com` (marketing) → app at `https://app.clefmark.com`  
**Product context:** Clefmark app [README.md](https://github.com/clefmark/clefmark/blob/main/README.md)

### v0.1 shipped (one-page)

| Route | Status |
|-------|--------|
| `/` | Single scroll — hero, story, how it works, why, built-for, trial CTA |
| `/legal/privacy` | Draft stub — human review before publish |
| `/legal/terms` | Draft stub — human review before publish |

Deferred: `/features`, `/pricing`, `/contact`, `/about`, `/blog`, analytics.

---

## Purpose

The marketing site **sells the story and captures intent**. It does not run CRM, maps, inbox, or tenant logic.

| Marketing site | Product app (`clefmark`) |
|----------------|--------------------------|
| Static/SSR pages, fast SEO | Authenticated multi-tenant SaaS |
| Pricing, features, trust | Dashboard, Explore, Clients, Inbox, Admin |
| CTAs → signup/login | Firebase Auth, Firestore, integrations |
| Optional waitlist / contact form | Stripe Checkout, Customer Portal |

**One job:** convince a sales leader that map-first field sales + unified comms + playbooks beats their current stack — then hand them to the app.

---

## Tech stack

Keep the website **small and fast** — separate from the heavy app bundle.

| Layer | Recommendation | Notes |
|-------|----------------|-------|
| Framework | **Next.js 15** (App Router) | Same ecosystem as app; easy for Cursor to context-switch |
| Alternative | **Astro** + React islands | Valid if prioritizing static speed; pick one at bootstrap |
| Styling | **Tailwind CSS** + shared brand tokens | Mirror app fonts/colors; no shadcn required |
| Content | **MDX** or markdown in `content/` | Features, legal, changelog |
| Icons | **lucide-react** | Match app |
| Analytics | **Plausible** or **Firebase Analytics** | Privacy-friendly; no PII |
| Forms | **Resend** + API route, or **Formspree** | Contact / demo request only |
| Deploy | **Firebase App Hosting** | Git-connected rollouts; production on `clefmark.com` |
| CMS (later) | Sanity or Contentlayer | v0.1: git-based markdown is enough |

**Explicitly out of scope for v0.1 website:** Firebase Admin, Firestore, map SDK, Nylas, Twilio, authenticated sessions.

---

## Information architecture

```text
clefmark.com/
├── /                    Home
├── /features            Product pillars (deep dive)
├── /pricing             Plans + usage meters explained
├── /customers           Logos + quotes (placeholder until real)
├── /about               Founder story, why Clefmark
├── /blog                Optional v0.1 — can ship as empty or 1 launch post
├── /contact             Demo request / contact
├── /legal/
│   ├── privacy
│   ├── terms
│   └── security         Trust page (data handling summary)
└── /changelog           Optional — link to GitHub releases or MDX posts
```

**App routes (not on marketing host):**

```text
app.clefmark.com/signup
app.clefmark.com/login
app.clefmark.com/join/[slug]
app.clefmark.com/invite/[token]
```

All header CTAs point to `app.clefmark.com`.

---

## Page specs

### Home (`/`)

**Goal:** Immediate clarity for ICP — B2B field sales teams, 5–50 reps, location-based prospects.

| Section | Content |
|---------|---------|
| **Hero** | Headline + subhead from product one-liner; primary CTA “Start free trial” → signup; secondary “See features” |
| **Problem** | Desk CRM vs territory reality — reps live on maps and in inboxes, not in spreadsheet views |
| **Solution visual** | Split or stacked mock: **Explore map** + **unified inbox** + **playbook timeline** (static screenshots or illustrated UI — no live map API on marketing site) |
| **Pillars** | Six cards: Discover, CRM, Communicate, Automate, Playbooks, Customize — from [README § Product pillars](../../README.md#product-pillars) |
| **Differentiation** | Short table vs desk CRM / field map CRM / engagement-only — from README |
| **Social proof** | Placeholder logos + one quote block until beta customers exist |
| **Pricing teaser** | “Per seat + usage” summary + link to `/pricing` |
| **Footer CTA** | Repeat signup; link legal |

**Hero headline (draft):**  
*Territory sales, tied together.*  
Subhead: Map-native discovery, clients, email, SMS, and playbooks in one OS for field B2B teams.

### Features (`/features`)

Expand each pillar into a section with screenshot placeholder and 3 bullet outcomes.

| Pillar | Message |
|--------|---------|
| **Discover** | Google, Apple, Yelp — map and list; territory-first prospecting |
| **CRM** | Progress, deals, tasks, timeline — context follows the rep |
| **Communicate** | One inbox: email + SMS; signatures; link threads to clients |
| **Automate** | Scheduled email, SMS, print mail (Stannp) |
| **Playbooks** | Team sequences — call, email, SMS, wait, print steps |
| **Customize** | Industry pack, AI rules, library — org clef defines the score |

Optional anchor nav sticky on scroll.

### Pricing (`/pricing`)

Align with app billing (Stripe) — marketing explains; app enforces.

| Element | v0.1 approach |
|---------|----------------|
| **Seat tiers** | Starter ($29/mo, 1 seat) · Team ($114/mo, up to 5) · Growth ($199/mo, up to 10) · Scale ($399/mo, up to 25) — see [PRICING.md](../reference/PRICING.md) |
| **Usage meters** | SMS segments, AI tokens, print pieces — billed separately (rates TBD at Layer 6) |
| **Trial** | 14-day trial on signup; no Free tier |
| **CTA** | “Start trial” → `https://app.clefmark.com/signup?plan=starter` (or `?plan=team`, etc.) |
| **Implementation** | Static pricing cards v0.1; optional **Stripe Pricing Table** embed later |

Include FAQ accordion: cancellation, data export, multi-org, security.

### Customers (`/customers`)

v0.1: “Built for teams selling to local businesses” + industry chips (commercial services, distribution, equipment, franchise dev, vertical SaaS). Replace with real logos when available.

### About (`/about`)

- **Why Clefmark** — clef + mark story from [README](../../README.md#why-clefmark)
- **Built for field sales** — not a generic CRM bolt-on
- **Contact** — founder email or `/contact` link

Tone: direct, operator-friendly — not enterprise buzzword soup.

### Contact (`/contact`)

- Fields: name, work email, company, rep count (select), message
- POST to lightweight API route → Resend email to you
- No CRM integration on website v0.1 — manual follow-up is fine

### Legal (`/legal/*`)

| Page | Minimum content |
|------|-----------------|
| **Privacy** | Firebase Auth, Firestore, subprocessors (Google, Stripe, Twilio, Nylas, Stannp), data retention |
| **Terms** | SaaS subscription, acceptable use, termination |
| **Security** | Tenant isolation (`orgId`), encryption at rest/transit, OAuth token handling summary |

Agent drafts from standard SaaS templates; **you review before publish**.

---

## Design direction

| Token | Direction |
|-------|-----------|
| **Brand** | Clef + map mark — subtle musical motif without looking like a consumer music app |
| **Color** | Dark navy or forest base + one bright accent (map pin / clef highlight) — distinct from Groundzy green |
| **Typography** | Geist or Inter — match app `next/font` |
| **Imagery** | Product UI screenshots once app Layer 1+ exists; until then, clean wire-style mockups |
| **Map motif** | Abstract territory grid or pin cluster in hero — not a live Google Map (API cost + clutter) |

**Responsive:** mobile-first; reps may open links on phone.

**Accessibility:** semantic headings, contrast AA, focus states on CTAs.

---

## SEO & metadata

| Item | Value |
|------|-------|
| **Title template** | `%s · Clefmark` |
| **Default description** | Map-based CRM and sales communication for B2B field teams. |
| **OG image** | Static `og.png` — hero + logo |
| **Structured data** | `Organization` + `SoftwareApplication` JSON-LD on home |
| **Sitemap** | `app/sitemap.ts` — all public routes |
| **robots** | Allow all; disallow `/api/` |

Target keywords (natural, not stuffed): field sales CRM, map-based prospecting, territory sales software, sales playbook automation.

---

## Analytics & conversion

| Event | Trigger |
|-------|---------|
| `cta_signup_click` | Hero / header / footer signup |
| `cta_demo_click` | Contact or “Book demo” |
| `pricing_plan_click` | Plan card CTA |
| `features_anchor` | Optional — pillar section views |

Use Plausible custom events or Firebase Analytics — no third-party ad pixels in v0.1.

---

## Repository layout

```text
clefmark-website/
├── app/
│   ├── page.tsx              # Home
│   ├── features/
│   ├── pricing/
│   ├── about/
│   ├── contact/
│   ├── legal/
│   └── api/contact/route.ts  # optional form handler
├── components/
│   ├── marketing-header.tsx
│   ├── marketing-footer.tsx
│   ├── hero.tsx
│   ├── pillar-grid.tsx
│   └── pricing-cards.tsx
├── content/                  # MDX optional
├── public/
│   ├── og.png
│   └── logos/
├── .cursor/rules/marketing.mdc
├── MARKETING.md              # copy of this file
├── README.md                 # deploy + env only
└── package.json
```

---

## Environment variables

```bash
# Public
NEXT_PUBLIC_APP_URL=https://app.clefmark.com
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=clefmark.com   # if using Plausible

# Server (contact form only)
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@clefmark.com
```

No Firebase or Stripe secret keys on the marketing site.

---

## Build order (marketing)

Can run **in parallel** with app Layer 0–1.

| Step | Deliverable |
|------|-------------|
| **M0** | Repo scaffold, header/footer, brand tokens, deploy to Firebase App Hosting |
| **M1** | Home + features pages (placeholder visuals) |
| **M2** | Pricing + legal stubs |
| **M3** | Contact form + analytics |
| **M4** | Replace mocks with real app screenshots after Layer 1–3 |
| **M5** | Launch post + changelog (optional) |

---

## Launch checklist

- [ ] Domain `clefmark.com` → Firebase App Hosting (`clefmark-website` repo)
- [x] App live at Firebase App Hosting (`clefmark` app repo)
- [ ] `app.clefmark.com` custom domain → product App Hosting backend
- [ ] SSL on both; HSTS on app
- [ ] OG image and favicon
- [ ] Privacy/terms reviewed by you
- [ ] Signup/login links tested against app Layer 0 auth
- [ ] Contact form delivers to inbox
- [ ] Analytics receiving events

---

## Open questions

- Trial vs paid-only signup on day one (trial selected — 14 days, no Free)
- Usage meter pricing copy (seat tiers resolved — see [PRICING.md](../reference/PRICING.md))
- Blog at launch or post-v0.1
- Waitlist mode before app signup is ready

---

## Revision log

| Date | Change |
|------|--------|
| 2026-06-05 | Initial marketing site spec |
| 2026-06-06 | Deploy — Firebase App Hosting replaces Vercel (ADR-003) |
| 2026-06-06 | App live at `clefmark--clefmark.us-east4.hosted.app` |
| 2026-06-06 | Pricing tiers — Starter / Team / Growth / Scale; flat band; link PRICING.md |
| 2026-06-07 | Domain locked — `clefmark.com` marketing, `app.clefmark.com` product (ADR-009) |
| 2026-06-08 | v0 one-page implemented in `clefmark-website` repo — scroll home + legal stubs |
| 2026-06-08 | v0 one-page launch — `clefmark-website` repo at `c:\Clefmark-website`; home scroll + legal stubs; M0–M1 |
