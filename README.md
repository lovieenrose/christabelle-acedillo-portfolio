# Christabelle Acedillo: Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide. No backend.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```
Put your resume at `public/resume.pdf` (the Download button links to `/resume.pdf`).

## Contact form (Formspree, free, no backend)
1. Sign up at https://formspree.io and click **New form**. Use `belleacedillo@gmail.com` as the recipient and confirm the email Formspree sends.
2. Copy the form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Locally: copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT=<your endpoint>`. Restart `npm run dev`.
4. On Vercel: add the same variable (see below).

Without the variable, the form falls back to opening the visitor's email app (`mailto:`), so it never fails silently.
A hidden honeypot field (`_gotcha`) already blocks basic spam bots.

## Deploy to Vercel
1. Push the project to GitHub (`git init`, commit, create a repo, push). `.env` and `node_modules` are git-ignored.
2. Go to https://vercel.com/new and import the repo. Vercel detects **Vite** automatically (build `npm run build`, output `dist`).
3. Under **Environment Variables**, add `VITE_FORMSPREE_ENDPOINT` with your endpoint.
4. Click **Deploy**. Every push to `main` redeploys automatically.
5. Optional: add a custom domain under Project → Settings → Domains.

## Editing content
Everything lives in `src/data/content.js`. Anything in `[square brackets]` is a placeholder and shows in italics on the page.

**Add a project:** copy an object in the `projects` array and edit it:
```js
{
  title: 'My New App',
  subtitle: 'What it is in a few words',
  period: 'Solo project · Jan 2026',
  description: 'One or two sentences on what it does.',
  role: 'Developer',
  tech: ['React', 'Tailwind CSS'],
  links: [
    { label: 'GitHub', url: 'https://github.com/lovieenrose/my-new-app' },
    { label: 'Live demo', url: 'https://my-new-app.vercel.app' },
  ],
}
```
- Order in the array is the order on the page. Only PRISM-GUARD has `featured: true` (larger card; it also supports a `highlights: []` list).
- `links`: a URL starting with `https://` becomes a clickable link. Anything else (e.g. `'[GitHub link]'`) shows as plain placeholder text. Delete the entry to hide it.
- Fill in Thrifster and Dear Dango by replacing the `[placeholders]`.
- Set your graduation date in `education[0].period`.
- Skills, certifications, awards, and contact details are edited the same way in the same file.
