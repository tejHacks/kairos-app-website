# Kairos website

The website for **Kairos**, a Christian prayer app: home page, Privacy Policy and Support.
Next.js 16 (App Router) + Tailwind CSS 4. Every page is static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Deploy on Vercel

1. Import this repository in Vercel. The defaults (framework: Next.js) are correct.
2. Optional environment variables (Settings → Environment Variables), then redeploy:

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | The live URL, e.g. `https://kairos.example.com`. Used in the sitemap, canonical links and social previews. Defaults to `https://kairos-app-website.vercel.app`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shows a contact email on the Support and Privacy pages. |
| `GOOGLE_SITE_VERIFICATION` | The code from Google Search Console's "HTML tag" method. |
| `NEXT_PUBLIC_APK_URL` | Where "Download the APK" points. Defaults to the latest GitHub release asset `Kairos.apk`. |

## Pages

- `/` home
- `/privacy` Privacy Policy (use this URL in the Play Console)
- `/support` help and contact
- `/sitemap.xml`, `/robots.txt` generated for search engines
