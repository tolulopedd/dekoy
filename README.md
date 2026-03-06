# DeKoy Corporate Website (DeKoy Limited)

Modern multi-division corporate website built with Next.js App Router, TypeScript, TailwindCSS, and Framer Motion.

## Tech Stack
- Next.js (App Router) + TypeScript
- TailwindCSS
- Framer Motion
- Next.js metadata API for SEO (`metadata`, `sitemap.xml`, `robots.txt`)

## Run Locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Contact Submission
- API route: `/api/contact`
- Submissions are emailed to: `abiodun.adekoya@dekoyng.com`
- Submissions are also logged to: `storage/quote-submissions.jsonl`
- Configure Resend with `.env` (see `.env.example`)

## Netlify Deployment
1. Push this project to a Git repository connected to Netlify.
2. In Netlify, create a new site from that repository.
3. Build command: `npm run build`
4. Node version: `20`
5. Set environment variables:
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
6. Redeploy after env vars are set.

## Project Structure
- `app/` routes and SEO files
- `components/` reusable UI components
- `data/` typed content models (divisions, services, projects, testimonials, FAQs)
- `public/assets/` placeholder images
- `storage/` runtime quote submissions log
