# Deploy clefmark.com

Local gates (run before every deploy):

```bash
npm run lint
npm run typecheck
npm run build
```

## First-time Firebase setup

The product app uses backend `clefmark`. Marketing needs a **separate** backend `clefmark-website`.

1. Firebase Console → App Hosting → **Create backend**
   - Backend ID: `clefmark-website`
   - Connect this repo (GitHub) or deploy via CLI from `c:\Clefmark-website`
2. Confirm `firebase.json` has `"backendId": "clefmark-website"`
3. Map custom domain **`clefmark.com`** to the `clefmark-website` backend (not the product backend)
4. Env vars in `apphosting.yaml`; set `RESEND_API_KEY` as secret for contact form

## CLI deploy (after backend exists)

```bash
npx firebase deploy --only apphosting:clefmark-website --project clefmark-app
```

## Post-deploy smoke test

- [ ] `https://clefmark.com/` loads home with nav (Features, Pricing, About)
- [ ] **Start 14-day trial** → `https://app.clefmark.com/signup?plan=starter` (preserves utm_*)
- [ ] **Sign in** → `https://app.clefmark.com/login`
- [ ] `/features`, `/pricing`, `/about`, `/contact`, `/for/field-sales` return 200
- [ ] `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/legal/security` return 200
- [ ] `/sitemap.xml`, `/robots.txt`, `/llms.txt` return 200
- [ ] Open Graph preview shows headline (via `/opengraph-image`)
- [ ] Cookie consent banner → GA4 loads after Accept
- [ ] Contact form delivers email (requires `RESEND_API_KEY`)
