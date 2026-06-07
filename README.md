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
4. Env: `NEXT_PUBLIC_APP_URL=https://app.clefmark.com` (in `apphosting.yaml`)

```bash
firebase deploy --only apphosting:clefmark-website
```

## v0.1 scope

Single scroll landing page at `/` plus legal stubs at `/legal/privacy` and `/legal/terms`. Multi-page IA (`/features`, `/pricing`, etc.) deferred per MARKETING.md.
