# Shipfront / THE BLACK

Isolated crate-os recut: a dark Terminal site for Shipfront. Source copy matches [myshipfront.com](https://www.myshipfront.com/) and [shipfront-crate-os](https://davidtphung.github.io/shipfront-crate-os/). This repo does not write those sites.

Wordmark is bold **SHIPFRONT** plus the hard-line isometric cube. THE BLACK is the sibling name only. It does not appear in the nav wordmark.

## Pages

- Home
- Get a Quote
- Contact

Quote form (Kunal): required Name, Email, Phone. Optional Company Name, Website, Message. Preview only. No live post.

Contact: 1933 S. Broadway, Los Angeles CA 90007 and [info@myshipfront.com](mailto:info@myshipfront.com). No business phone.

Footer: Built by David T Phung.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43217](http://localhost:43217) if you start the server with `npm run dev -- --port 43217`, or the port Next prints.

## GitHub Pages

Public site: [https://davidtphung.github.io/shipfront-the-black/](https://davidtphung.github.io/shipfront-the-black/)

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/shipfront-the-black npm run build
```

The static export is written to `out/`.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Space Grotesk
- Motion for UI choreography
- Accent `#FF6A00` on ground `#000`
