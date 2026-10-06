# Rock One Solution

A Next.js + React website project using the App Router, TypeScript, and ESLint.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

On Windows PowerShell, if `npm` is blocked by the execution policy, use
`npm.cmd` in the same commands, for example `npm.cmd run dev`.

## Environment variables

The contact form (homepage `#contact` and `/contact`) submits to
[Web3Forms](https://web3forms.com), which needs no backend. Create a free access
key and add it to `.env.local` for local development:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
```

Add the same variable in the Vercel project settings (Settings → Environment
Variables) so the deployed form delivers. Without the key the form renders in a
disabled state telling visitors to email instead, rather than silently
discarding submissions.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.
