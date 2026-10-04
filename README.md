This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Mwarabu Nuts Admin

Copy `.env.example` to `.env.local`, set a strong private `ADMIN_PASSWORD`, then run `npm run dev` and open `/admin` to sign in.

The dashboard can upload JPG, PNG and WebP product photos up to 5 MB; create and remove products; and update names, URL slugs, categories, descriptions, grades, origin, processing, availability, stock quantity, retail and wholesale prices, export minimum order and packaging. Saving publishes changes to the storefront.

Product records are stored in `data/products.json`, and uploaded pictures in `public/uploads/`. This file-backed storage works on a local or persistent single server. For an ephemeral/serverless deployment, use a database and persistent object storage before relying on admin changes. The PostgreSQL schema is in `db/schema.sql`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
