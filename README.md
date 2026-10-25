# Jingwei — personal site

An Astro static site for independent research, data, and technical consulting. It uses Astro Content Collections for projects and writing, and is ready for deployment to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
npm run build
```

The production build is written to `dist/`.

## Writing and projects

- Add an article in `src/content/blog/` using the frontmatter in the sample post.
- Add a portfolio case study in `src/content/projects/` using the sample project frontmatter.
- Files automatically receive static detail pages; no CMS or database is required.

## SEO and discovery

The project includes canonical URLs, page-level descriptions, Open Graph/Twitter metadata, JSON-LD for the site/person and posts, `robots.txt`, RSS (`/rss.xml`), and a build-generated XML sitemap (`/sitemap-index.xml`).

Before publishing, update the `site` object in `src/lib/site.ts` and the `site` setting in `astro.config.mjs` with the final custom domain. These two values must match. Then submit `https://your-domain/sitemap-index.xml` to Google Search Console.

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Import an existing Git repository**.
3. Select `JingggW/personal-website` and use:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy, then add the custom domain in the Pages project's **Custom domains** settings.

Cloudflare will build and deploy future pushes to `main` automatically. The site is entirely static, so it needs no adapter, database, or server-side secrets.

## Cloudflare Web Analytics

After deployment, enable **Web Analytics** in Cloudflare and add the tokenised beacon snippet provided by Cloudflare to `src/layouts/BaseLayout.astro`. Do not commit the token unless you are comfortable making it public; a Cloudflare build environment variable is preferable.

## Before publishing

- [ ] Replace `jingwei.dev` with your real domain in `src/lib/site.ts` and `astro.config.mjs`.
- [ ] Replace the placeholder email and LinkedIn URL in `src/lib/site.ts`.
- [ ] Review the short bio and location on the home/about pages.
- [ ] Replace the two clearly labelled sample project case studies with real work.
- [ ] Replace the sample blog post.
- [ ] Add real project screenshots or visualisations where appropriate.
- [ ] Enable Cloudflare Web Analytics and submit the sitemap to Search Console.
