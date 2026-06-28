# Cackle — website

Marketing site for **Cackle** (funny photo clips in one tap). Next.js + Tailwind,
**static-exported** to `out/` and served on **Netlify**. Design mirrors the
AppalachAI Studios site (same studio house style).

## Stack
- Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3
- `output: "export"` → a plain static `out/` folder (no server)

## Develop
```
cd website
npm install
npm run dev        # http://localhost:3000
npm run build      # → website/out/  (what Netlify publishes)
```

## Deploy (Netlify)
Connect this GitHub repo in Netlify — `netlify.toml` already sets `base=website`,
`command=npm run build`, `publish=out`. Then point `cackleapp.com` (Namecheap) at
the Netlify site. The API stays separate on Vercel (`cackle-web.vercel.app`).

## Edit content
Almost everything lives in `website/lib/site.ts` (copy, links, moods, clips).
