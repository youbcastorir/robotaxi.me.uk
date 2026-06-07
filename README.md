# 🚖 RoboTaxi UK — Autonomous Mobility Platform

**Domain:** [robotaxi.me.uk](https://robotaxi.me.uk)  
**Stack:** Vanilla HTML5 · CSS3 · JavaScript (ES6+) · PWA  
**Target Market:** United Kingdom  
**Contact:** WhatsApp [0612 605 737](https://wa.me/212612605737) · Email salatrir@gmail.com

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Quick Start (Local)](#quick-start-local)
4. [GitHub Pages Deployment](#github-pages-deployment)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Customisation Guide](#customisation-guide)
7. [SEO Guide](#seo-guide)
8. [WhatsApp Integration](#whatsapp-integration)
9. [PWA Setup](#pwa-setup)
10. [Contact & Support](#contact--support)

---

## 🌐 Project Overview

RoboTaxi UK is a professional, production-ready website for an autonomous transportation and delivery platform targeting the United Kingdom market. It presents:

- **Autonomous Passenger Transport** — city taxis, airport transfers, corporate travel
- **Smart Delivery Services** — packages, same-day, e-commerce, last-mile logistics
- **Business Solutions** — fleet management, enterprise partnerships, smart city integration
- **Booking System** — full contact form with tab-based service selection
- **8 UK Service Areas** — London, Manchester, Birmingham, Liverpool, Leeds, Glasgow, Edinburgh, Bristol

### Key Features
- ⚡ Zero dependencies — pure HTML/CSS/JS, no frameworks
- 🌙 Dark / Light mode toggle with localStorage persistence
- 📱 Fully responsive — mobile, tablet, desktop
- 🔍 Full SEO: Schema.org, Open Graph, Twitter Cards, sitemap.xml
- 💬 WhatsApp deep-link integration throughout
- 🎨 Futuristic design — Orbitron + DM Sans, cyan/dark palette
- ♿ Semantic HTML with ARIA attributes
- 🚀 PWA-ready with Web App Manifest

---

## 📁 File Structure

```
robotaxi-uk/
├── index.html        # Main HTML — full single-page site
├── style.css         # All styles — dark/light theme, animations
├── app.js            # Core JS — nav, cursor, particles, counters, theme
├── services.js       # Data layer — services, areas, FAQ rendering
├── booking.js        # Booking form — tabs, validation, WhatsApp redirect
├── manifest.json     # PWA Web App Manifest
├── sitemap.xml       # XML sitemap for search engines
├── robots.txt        # Crawler instructions
├── README.md         # This file
├── .gitignore        # Git ignored files
└── icons/            # (You must generate) PWA icons 72–512px
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🚀 Quick Start (Local)

No build step required. Just open the file:

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server (recommended — avoids CORS issues)
npx serve .
# or
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

---

## 🐙 GitHub Pages Deployment

### Step 1 — Create GitHub Repository

Go to [github.com/new](https://github.com/new) and create a new **public** repository named `robotaxi-uk`.

### Step 2 — Push the Project

```bash
git init
git add .
git commit -m "🚖 Launch RoboTaxi UK"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/robotaxi-uk.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `Deploy from a branch`
4. Choose branch: `main` / folder: `/ (root)`
5. Click **Save**

Your site will be live at:  
`https://YOUR_USERNAME.github.io/robotaxi-uk/`

---

## 🌍 Custom Domain Setup (robotaxi.me.uk)

### Step 1 — Add CNAME in GitHub Pages

1. In **Settings → Pages**, enter your custom domain: `robotaxi.me.uk`
2. GitHub will create a `CNAME` file automatically

### Step 2 — Configure DNS

In your domain registrar (e.g. Namecheap, GoDaddy, 123-reg):

| Type  | Host | Value                        |
|-------|------|------------------------------|
| A     | @    | 185.199.108.153              |
| A     | @    | 185.199.109.153              |
| A     | @    | 185.199.110.153              |
| A     | @    | 185.199.111.153              |
| CNAME | www  | YOUR_USERNAME.github.io      |

DNS propagation takes 1–48 hours.

### Step 3 — Enable HTTPS

Back in GitHub Pages settings, tick **Enforce HTTPS** once the certificate is issued (usually within minutes of DNS propagating).

---

## 🎨 Customisation Guide

### Change Colours

Open `style.css` and edit the CSS variables at the top:

```css
:root {
  --cyan:   #00f0ff;   /* Primary accent colour */
  --green:  #00ff88;   /* Secondary / live indicators */
  --amber:  #ffc837;   /* Warning / coming soon */
  --bg:     #080d14;   /* Main background (dark mode) */
}
```

For light mode, edit the `[data-theme="light"]` block below.

### Change Company Name / Logo

In `index.html`, find all instances of `ROBO<span class="logo-accent">TAXI</span>` and replace with your brand.

### Update Contact Details

1. **WhatsApp number** — search and replace `212612605737` with your WhatsApp number (include country code, no `+`):
   ```
   https://wa.me/YOUR_NUMBER
   ```

2. **Email** — search and replace `salatrir@gmail.com` with your email address.

3. **Footer display** — update the visible phone `0612 605 737` text throughout.

### Edit Services Content

Open `services.js` and edit the `SERVICES_DATA` object:

```js
const SERVICES_DATA = {
  passenger: [ /* edit service cards here */ ],
  delivery:  [ /* edit delivery cards here */ ],
  business:  [ /* edit business cards here */ ],
  areas:     [ /* edit city coverage here */ ],
  faq:       [ /* edit FAQ items here */ ]
};
```

### Add/Remove Cities

In `services.js`, edit the `areas` array:

```js
areas: [
  { city: 'London',  flag: '🏙', status: 'active', desc: 'All zones, 24/7' },
  { city: 'Cardiff', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', status: 'soon',   desc: 'Launching Q1 2026' },
  // add more...
]
```

Status options: `'active'` (green) or `'soon'` (amber).

### Change Fonts

In `index.html` `<head>`, update the Google Fonts link, then update `style.css`:

```css
--font-display: 'YourDisplayFont', monospace;
--font-body:    'YourBodyFont', sans-serif;
```

---

## 🔍 SEO Guide

### Meta Tags

All essential meta tags are in `index.html` `<head>`:

- **Title** — update `<title>` tag
- **Description** — update `<meta name="description">`
- **Keywords** — update `<meta name="keywords">`
- **Open Graph** — update all `og:` meta tags including `og:image`
- **Twitter Cards** — update all `twitter:` meta tags

### Schema.org

The structured data block in `index.html` uses `TransportationService` + `LocalBusiness`:

```json
{
  "@type": ["TransportationService", "LocalBusiness"],
  "name": "RoboTaxi UK",
  "areaServed": ["London", "Manchester", ...],
  "serviceType": ["Autonomous Taxi", "Package Delivery", ...]
}
```

Update `areaServed` and `serviceType` to match your actual services.

### Sitemap

Update `sitemap.xml`:
- Replace `https://robotaxi.me.uk` with your actual domain
- Update `<lastmod>` dates whenever you publish changes
- Submit to [Google Search Console](https://search.google.com/search-console)

### Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://robotaxi.me.uk`
3. Verify ownership (HTML tag method — paste in `<head>`)
4. Submit sitemap: `https://robotaxi.me.uk/sitemap.xml`

### Target Keywords

This site is optimised for:
- `Robotaxi UK`
- `Autonomous Taxi Service UK`
- `Smart Mobility UK`
- `Autonomous Delivery UK`
- `Future Transportation UK`
- `Last Mile Delivery London`
- `Urban Mobility Solutions`

Expand by adding a blog section with keyword-rich articles.

---

## 💬 WhatsApp Integration

All WhatsApp buttons use the click-to-chat format:

```
https://wa.me/212612605737
```

To add a pre-filled message, append `?text=`:

```
https://wa.me/212612605737?text=Hello%2C%20I%27d%20like%20to%20book%20a%20journey
```

WhatsApp buttons appear on:
- ✅ Navigation bar
- ✅ Hero section
- ✅ Services section (banner)
- ✅ Booking form
- ✅ Booking sidebar
- ✅ Business / Enterprise CTA
- ✅ Contact section
- ✅ Footer
- ✅ Floating button (bottom-right, always visible)

To change the WhatsApp number, do a global find & replace of `212612605737`.

---

## 📱 PWA Setup

To make the site installable as a Progressive Web App:

### Generate Icons

Use [realfavicongenerator.net](https://realfavicongenerator.net) or [pwabuilder.com](https://www.pwabuilder.com/imageGenerator) to generate all icon sizes from a single 512×512 PNG logo.

Place the generated PNGs in an `icons/` folder:
```
icons/icon-72.png
icons/icon-96.png
icons/icon-128.png
icons/icon-144.png
icons/icon-152.png
icons/icon-192.png
icons/icon-384.png
icons/icon-512.png
```

### Add Service Worker (Optional)

For offline support, create `sw.js` in the root:

```js
const CACHE = 'robotaxi-v1';
const ASSETS = ['/', '/index.html', '/style.css', '/app.js', '/services.js', '/booking.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
```

Then register it in `app.js`:

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

---

## 📞 Contact & Support

| Channel  | Details |
|----------|---------|
| WhatsApp | [0612 605 737](https://wa.me/212612605737) |
| Email    | salatrir@gmail.com |
| Website  | robotaxi.me.uk |

---

## 📄 Licence

© 2025 RoboTaxi UK. All rights reserved.

> **Disclaimer:** RoboTaxi UK is a mobility and logistics platform. Services presented represent planned and future autonomous operations subject to regulatory approvals. The website presents a future-service booking interface and does not claim current autonomous vehicle operations unless explicitly stated.

---

*Built with ❤️ for the future of British mobility.*
