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
4. Env var `NEXT_PUBLIC_APP_URL=https://app.clefmark.com` is set in `apphosting.yaml`

## CLI deploy (after backend exists)

```bash
npx firebase deploy --only apphosting:clefmark-website --project clefmark
```

If prompted to create the backend, confirm creation in the interactive wizard.

## Post-deploy smoke test

- [ ] `https://clefmark.com/` loads the one-page landing
- [ ] **Start 14-day trial** → `https://app.clefmark.com/signup?plan=team`
- [ ] **Sign in** → `https://app.clefmark.com/login`
- [ ] `/legal/privacy` and `/legal/terms` return 200
- [ ] `/sitemap.xml` and `/robots.txt` return 200
- [ ] Open Graph preview shows headline (via `/opengraph-image`)
