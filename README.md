# Clefmark — Marketing website

Public marketing site for [clefmark.com](https://clefmark.com). Product app lives at [app.clefmark.com](https://app.clefmark.com).

**Spec:** [MARKETING.md](./MARKETING.md)

## Setup

```bash
npm install
cp .env.example .env.local   # optional — defaults work for build
npm run dev
```

## Quality gates

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy (Firebase App Hosting)

1. Create App Hosting backend `clefmark-website` in Firebase project `clefmark`
2. Connect this repo; set `firebase.json` `backendId` to `clefmark-website`
3. Map custom domain `clefmark.com`
4. Env: see `apphosting.yaml`

```bash
firebase deploy --only apphosting:clefmark-website
```

## v0.2 scope (shipped)

Multi-page marketing site:

- `/` — home
- `/features`, `/pricing`, `/about`, `/contact`
- `/for/field-sales` — SEO intent page
- `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/legal/security`
- `/llms.txt` — AI discoverability
- GA4 consent-first analytics with funnel events
