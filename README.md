# US Macro Signals Desk

Curated catalog of free, public US macro and market data sources supporting a 2–4 week discretionary FX, indices, and gold trading workflow.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
npm start
```

## Project Structure

- `src/app/page.tsx` – catalog experience entry point
- `src/components` – reusable UI sections
- `src/data/catalog.ts` – indicator definitions and metadata

## Deployment

Optimized for Vercel. Create a production build via `npm run build` and deploy with:

```bash
vercel deploy --prod --yes --name agentic-f061d6f4 --token $VERCEL_TOKEN
```
