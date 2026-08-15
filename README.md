# L FanfilCA — Studio Website

The official website for the L FanfilCA mobile studio: casual games, daily utility apps, and a mobile management suite — published on Google Play and the App Store for users worldwide.

🌐 **Live:** https://lfanfilca.com
📧 **Business contact:** spencerk@ho-weicar.pics
🔒 **Privacy:** privacy@lfanfilca.com

## Tech stack

- **HTML5** (semantic, SEO-optimized)
- **CSS3** (custom design system, animations, responsive, dark mode)
- **Vanilla JavaScript** (no framework, no build step)
- **SVG** for icons, logo, and the entire cast of friendly mascots 🦊🐼🐰🦉🐧🦝🦌
- **PNG** for large generated illustrations

## Structure

```
.
├── index.html         # Home
├── services.html      # Service lines (games / tools / management)
├── contact.html       # Contact + form
├── privacy.html       # Privacy Policy (full, every market, every ad network)
├── terms.html         # Terms of Service
├── 404.html           # Friendly 404
├── app-ads.txt        # Ad sellers declaration
├── robots.txt         # Search engine directives
├── sitemap.xml        # XML sitemap
├── CNAME              # Custom domain
├── css/
│   └── style.css      # All styles
├── js/
│   └── app.js         # Animations, scroll reveal, mobile nav, form
├── images/
│   ├── logo.svg
│   ├── favicon.svg
│   ├── animals/       # 8 cute mascot SVGs
│   ├── icons/         # Service / store / utility icons
│   └── *.png          # Large illustrations
└── .well-known/
    └── security.txt   # Responsible disclosure
```

## Pages

- **Home** — hero, value props, social proof, mascots, stats, FAQ, CTA
- **Services** — mobile management suite, casual games, daily tools, store presence, process, pricing
- **Contact** — multiple channels, contact form with friendly validation
- **Privacy** — 19 sections covering GDPR / CCPA / COPPA / LGPD / PIPL and 20+ ad networks (AdMob, Meta, Unity, AppLovin, Vungle, InMobi, Pangle, Mintegral, etc.) and every ad format (banner, interstitial, rewarded video, open-screen, native, offerwall)
- **Terms** — 23 sections covering eligibility, accounts, subscriptions, virtual items, advertising, store rules, country-specific terms, AI, security, liability, governing law

## SEO

- Schema.org `Organization`, `WebSite`, `WebPage`, `ContactPage`
- Open Graph + Twitter Card metadata
- `<link rel="canonical">` and `<link rel="alternate" hreflang>` on every page
- `robots.txt` and `sitemap.xml`
- Semantic HTML (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`, `<aside>`)
- Skip link, descriptive alt text, ARIA labels
- Preconnect to Google Fonts

## Accessibility

- WCAG 2.2 AA contrast targets
- Keyboard navigable, visible focus
- `prefers-reduced-motion` respected
- Skip-to-content link

## Deployment

The site is deployed via **GitHub Pages** with a custom domain (`lfanfilca.com`) and HTTPS forced. A `CNAME` file at the root of the published branch binds the domain; GitHub automatically provisions the Let's Encrypt certificate.

## License

© 2026 L FanfilCA Studio. All rights reserved.
