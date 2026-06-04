# Kelly Green Holdings — Deployment Guide

## GitHub Repo
`StarbloomConsultingHub/kellygreenholdings.com`

## Vercel
1. Go to https://vercel.com
2. Import repo `kellygreenholdings.com`
3. Framework: **Astro**
4. Root directory: `./`
5. Build command: `astro build`
6. Output: `dist`
7. Environment: Vercel auto-detects Astro

## Custom Domain
- **Domain:** kellygreenholdings.com
- **DNS:** Cloudflare (or Vercel nameservers)
- **Vercel Config:** Add domain in Vercel project settings → Domains

## Local Dev
```bash
npm run dev    # http://localhost:4321
npm run build  # static build to dist/
```

## Auto-Deploy
Push to `main` → Vercel auto-deploys.
