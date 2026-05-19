# FullStackMearn PWA

<div align="center">

![FullStackMearn Banner](https://img.shields.io/badge/FullStack-Mearn-c9a96e?style=for-the-badge&logo=pwa&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-4caf50?style=for-the-badge&logo=googlechrome&logoColor=white)
![Offline Support](https://img.shields.io/badge/Offline-Supported-0d0d0d?style=for-the-badge&logo=serviceworker&logoColor=c9a96e)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br/>

> **A modern Progressive Web App boilerplate — offline-ready, installable, and fast.**  
> Built with vanilla HTML, CSS, and JavaScript. No frameworks. No build step. Just open and go.

<br/>

[![Open App](https://img.shields.io/badge/▶%20Open%20App-index.html-c9a96e?style=for-the-badge)](index.html)

</div>

---

## 📖 Table of Contents

| # | Section | Description |
|---|---------|-------------|
| 1 | [📁 Project Structure](#-project-structure) | All files and their roles |
| 2 | [🗂️ File Dictionary](#️-file-dictionary) | Detailed per-file breakdown |
| 3 | [🚀 How to Open](#-how-to-open) | Ways to run the app locally |
| 4 | [⚙️ How It Works](#️-how-it-works) | PWA, Service Worker, caching explained |
| 5 | [🧪 How to Test Everything](#-how-to-test-everything) | Step-by-step testing guide |
| 6 | [📦 PWA Install](#-pwa-install) | How to install as a native app |
| 7 | [🎨 Design System](#-design-system) | Colors, fonts, and CSS variables |
| 8 | [🔧 Customization Guide](#-customization-guide) | How to extend and modify |

---

## 📁 Project Structure

```
FullStackMearn/
│
├── 📄 index.html          ← Home page (hero + navigation cards)
├── 📄 page1.html          ← Demo section 01
├── 📄 page2.html          ← Demo section 02
├── 📄 404.html            ← Custom "Page Not Found" error page
├── 📄 offline.html        ← Offline fallback page
│
├── 🎨 base.css            ← Global styles (variables, typography, nav, footer)
├── 🎨 home.css            ← Hero section + card grid styles
├── 🎨 page1.css           ← Info block layout styles (Page 1)
├── 🎨 page2.css           ← Feature row layout styles (Page 2)
│
├── ⚙️ app.js              ← Service worker registration + PWA install prompt
├── ⚙️ page1.js            ← Page 1 script entry point
├── ⚙️ page2.js            ← Page 2 script entry point
├── ⚙️ sw.js               ← Service worker (cache-first strategy)
│
├── 📋 manifest.json       ← Web App Manifest (PWA metadata + icons)
├── 🖼️ Mahmoud.png         ← App icon / logo (used as favicon + PWA icon)
│
└── 📘 README.md           ← You are here
```

---

## 🗂️ File Dictionary

> Detailed breakdown of every file in the project.

---

### 📄 `index.html` — Home Page

> The app's entry point. Contains the hero section with the app icon, title, install button, and two navigation cards pointing to Page 1 and Page 2.

**Key elements:**
- `<nav class="site-nav">` — Top navigation bar with brand + links
- `<section class="hero">` — Animated hero with floating icon
- `<button id="installBtn">` — Hidden by default; shown by `app.js` when PWA install is available
- `<nav class="page-grid">` — Two clickable cards to navigate to pages
- Loads: `base.css`, `home.css`, `app.js`

---

### 📄 `page1.html` — Section 01

> First demo page. Displays three "info blocks" explaining the boilerplate. Replace these with your own content.

**Key elements:**
- `.content-header` — Section tag + heading
- `.info-block` — Left-accented content cards (3 shown by default)
- `.back-link` — Returns user to home
- Loads: `base.css`, `page1.css`, `page1.js`


---

### 📄 `page2.html` — Section 02

> Second demo page. Uses a "feature row" layout with icons, headings, and descriptions. Highlights PWA caching features.

**Key elements:**
- `.feature-row` — Horizontal icon + text layout (3 rows)
- `.feature-row__icon` — Emoji icon on the left
- Loads: `base.css`, `page2.css`, `page2.js`

---

### 📄 `404.html` — Error Page

> Shown when a page is not found. The service worker intercepts 404 responses and returns this page automatically.

**Key elements:**
- `.error-code` — Large "404" in display font
- `.home-btn` — Styled link back to `index.html`

---

### 📄 `offline.html` — Offline Fallback

> Shown automatically by the service worker when the user navigates to a page that hasn't been cached and there's no network connection.

**Key elements:**
- `.offline-icon` — Pulsing moon emoji with CSS animation
- `.home-btn` — Link back to home

---

### 🎨 `base.css` — Global Stylesheet

> The foundation shared across all pages. Defines the design system.

| What it includes | Details |
|-----------------|---------|
| CSS custom properties | Colors, fonts, radius, transitions |
| Reset | `box-sizing`, `margin`, `padding` |
| Body | Dark background, flex column, noise texture overlay |
| `.site-nav` | Top navigation bar |
| `.site-footer` | Bottom footer |
| Typography | `h1`–`h3`, `p`, `a`, `.text-muted`, `.text-accent` |
| `.divider` | Horizontal rule |
| Google Fonts | Cinzel Decorative (display) + Crimson Pro (body) |

---

### 🎨 `home.css` — Home Page Styles

| Class | Purpose |
|-------|---------|
| `.hero` | Flex column, centered hero section |
| `.hero__icon` | 100×100px floating animation |
| `.hero__eyebrow` | Small uppercase label above title |
| `.hero__title` | Responsive clamp font size |
| `.hero__subtitle` | Italic muted subtitle |
| `.page-grid` | 2-column card grid (1-col on mobile) |
| `.page-card` | Hoverable navigation card with border |
| `#installBtn` | PWA install button (hidden until eligible) |
| `.pwa-badge` | Green dot indicator for service worker |

---

### 🎨 `page1.css` / `page2.css` — Page-Specific Styles

| Class | File | Purpose |
|-------|------|---------|
| `.content-header` | both | Section heading area with tag |
| `.info-block` | page1.css | Left-border accent content card |
| `.feature-row` | page2.css | Horizontal icon + text row |
| `.back-link` | both | Styled back navigation link |

---

### ⚙️ `app.js` — App Script

> Handles two responsibilities:

1. **Service Worker Registration** — Registers `sw.js` on page load
2. **PWA Install Prompt** — Captures `beforeinstallprompt`, shows `#installBtn`, triggers install on click

```
Load → register SW → listen for install prompt → show button → user clicks → prompt → done
```

---

### ⚙️ `sw.js` — Service Worker

> The brain of the PWA. Implements a **cache-first** strategy.

| Event | What it does |
|-------|-------------|
| `install` | Pre-caches all listed assets; calls `skipWaiting()` |
| `activate` | Deletes old caches that don't match `CACHE_NAME`; claims clients |
| `fetch` | Serves from cache first; falls back to network; caches new responses; returns `offline.html` on navigation failure |

**Cache versioning:**  
Change `CACHE_VERSION = 'v1'` → `'v2'` in `sw.js` to bust the old cache and force fresh assets on next load.

---

### ⚙️ `page1.js` / `page2.js` — Page Scripts

> Currently minimal — just `console.log` stubs. Add page-specific JavaScript here as needed.

---

### 📋 `manifest.json` — Web App Manifest

| Field | Value |
|-------|-------|
| `name` | FullStackMearn |
| `short_name` | Mearn |
| `theme_color` | `#0d0d0d` |
| `background_color` | `#0d0d0d` |
| `display` | `standalone` (no browser chrome) |
| `start_url` | `index.html` |
| `icons` | `Mahmoud.png` — maskable + any, 512×512 |
| `orientation` | any |
| `lang` | en-US |

---

### 🖼️ `Mahmoud.png` — App Icon

> Used as the favicon, Apple Touch icon, and PWA launcher icon. Displayed in the hero section with a float animation.  
> **Replace this** with your own 512×512 PNG for a production app. Update `manifest.json` if you rename the file.

---

## 🚀 How to Open

> ⚠️ **Service workers require HTTPS or `localhost`**. Simply double-clicking `index.html` (a `file://` URL) will load the pages but **will not activate the service worker or PWA features**. Use one of the methods below.

---

### Method 1 — VS Code Live Server *(Recommended)*

```bash
# 1. Install the Live Server extension in VS Code
# 2. Right-click index.html → "Open with Live Server"
# 3. Browser opens at http://127.0.0.1:5500
```

![VS Code](https://img.shields.io/badge/VS%20Code-Live%20Server-007ACC?style=flat-square&logo=visualstudiocode)

---

### Method 2 — Python HTTP Server

```bash
# Python 3
cd path/to/FullStackMearn
python -m http.server 8080

# Then open: http://localhost:8080
```

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

---

### Method 3 — Node.js `serve`

```bash
npx serve .
# Then open the URL shown in terminal (usually http://localhost:3000)
```

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

---

### Method 4 — PHP Built-in Server

```bash
php -S localhost:8080
# Then open: http://localhost:8080
```

---

## ⚙️ How It Works

### PWA Architecture

```
Browser
  │
  ├─ Loads index.html
  ├─ Registers sw.js via app.js
  │
  └─ Service Worker (sw.js)
       │
       ├─ INSTALL → Pre-caches all assets
       ├─ ACTIVATE → Clears stale caches
       └─ FETCH → Cache first → Network fallback → Offline page
```

### Cache Strategy: Cache-First

```
Request comes in
    │
    ▼
Is it in the cache?
    ├─ YES → Return cached response immediately ⚡
    └─ NO  → Fetch from network
                │
                ├─ 200 OK → Cache it + return it
                ├─ 404    → Return 404.html
                └─ Error  → Return offline.html (navigation)
                            Return 503 text (assets)
```

### Navigation Flow

```
index.html ──→ page1.html ──→ Back to Home
           └──→ page2.html ──→ Back to Home
                            │
           404.html ←───────┘ (on bad URL)
           offline.html ←──── (no network + uncached)
```

---

## 🧪 How to Test Everything

### ✅ 1. Test Basic Navigation

1. Open `http://localhost:8080`
2. Click **"Page One"** card → should load `page1.html`
3. Click **"← Back to home"** → returns to `index.html`
4. Click **"Page Two"** card → should load `page2.html`
5. Click nav links in the header → all three pages navigate correctly
6. Active page link should be highlighted in gold

---

### ✅ 2. Test Service Worker Registration

1. Open browser **DevTools** → **Application** tab → **Service Workers**
2. You should see `sw.js` listed with status **"Activated and running"**
3. Check the console for: `[App] SW registered: http://localhost:8080/`

![Chrome DevTools](https://img.shields.io/badge/DevTools-Application%20→%20Service%20Workers-4285F4?style=flat-square&logo=googlechrome)

---

### ✅ 3. Test Pre-Cache

1. DevTools → **Application** → **Cache Storage**
2. Expand **`mearn-v1`**
3. You should see all pre-cached files listed:
   - `index.html`, `page1.html`, `page2.html`
   - `404.html`, `offline.html`
   - All `.css`, `.js` files
   - `manifest.json`, `Mahmoud.png`

---

### ✅ 4. Test Offline Mode

> Simulates no internet connection.

1. Visit all three pages at least once (to ensure they're cached)
2. DevTools → **Network** tab → check **"Offline"** checkbox
3. Try navigating between pages → they should still load from cache ✅
4. Try navigating to a never-visited URL → `offline.html` should appear ✅
5. Uncheck "Offline" to restore network

---

### ✅ 5. Test 404 Page

```
# In your browser, navigate to:
http://localhost:8080/this-does-not-exist.html
```

> The service worker intercepts the 404 response and serves `404.html` automatically.  
> You'll see the large "404" error code with a link back to home.

---

### ✅ 6. Test PWA Installability

> Works best in Chrome/Edge on desktop or Android.

1. Open the app over `localhost` with a proper HTTP server
2. Look for the **install icon** in the browser address bar (desktop)
3. Or wait for the `#installBtn` to appear in the hero section
4. Click **"⬇ Install App"** → browser install dialog appears
5. Accept → app opens as a standalone window (no browser chrome)

**Check in DevTools:**  
Application → Manifest → Should show no errors and display the icon + name

---

### ✅ 7. Test Cache Version Bump

> How to push a fresh build after making changes.

1. Edit `sw.js` line 2:
   ```js
   var CACHE_VERSION = 'v2'; // was 'v1'
   ```
2. Reload the page
3. DevTools → Application → Cache Storage → old `mearn-v1` cache is deleted, `mearn-v2` appears ✅

---

### ✅ 8. Test Responsive Layout

1. DevTools → Toggle Device Toolbar (`Ctrl+Shift+M` / `Cmd+Shift+M`)
2. Set width to **375px** (mobile)
3. The `.page-grid` switches from 2 columns → 1 column ✅
4. Navigation, hero, and all text should remain readable

---

### ✅ 9. Test Lighthouse PWA Audit

1. DevTools → **Lighthouse** tab
2. Select: **Performance**, **Accessibility**, **PWA**
3. Click **"Analyze page load"**
4. Aim for green scores across all categories ✅

---

## 📦 PWA Install

The app is fully installable as a standalone app on:

| Platform | How to Install |
|----------|---------------|
| 🖥️ Chrome / Edge Desktop | Click install icon in address bar, or use the "⬇ Install App" button |
| 📱 Android Chrome | "Add to Home Screen" banner, or browser menu → Install app |
| 📱 iOS Safari | Share button → "Add to Home Screen" |

Once installed, the app:
- Opens in its own window (no browser UI)
- Has its own taskbar/dock icon using `Mahmoud.png`
- Works fully offline

---

## 🎨 Design System

### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg` | `#0d0d0d` | Page background |
| `--color-surface` | `#161616` | Card/block backgrounds |
| `--color-border` | `#2a2a2a` | Borders and dividers |
| `--color-text` | `#e8e0d5` | Primary text |
| `--color-muted` | `#6b6560` | Secondary/subtitle text |
| `--color-accent` | `#c9a96e` | Gold accent (headings, links) |
| `--color-accent-dim` | `#7a5f35` | Dimmed gold (borders, hover) |
| `--color-danger` | `#8b3a3a` | Error states |

### Typography

| Variable | Font | Use |
|----------|------|-----|
| `--font-display` | Cinzel Decorative (700) | Headings, brand, nav |
| `--font-body` | Crimson Pro (300/400, italic) | Body text, paragraphs |

### Spacing & Shape

| Variable | Value |
|----------|-------|
| `--radius` | `6px` |
| `--transition` | `200ms ease` |

---

## 🔧 Customization Guide

### Add a New Page

1. Copy `page1.html` → rename to `page3.html`
2. Update `<title>`, meta description, `aria-current` nav link
3. Add the page to `sw.js` → `PRECACHE_URLS` array
4. Add a nav link in all HTML files
5. Add a card in `index.html`'s `.page-grid`

### Change the App Name / Icon

1. Replace `Mahmoud.png` with your own 512×512 PNG
2. Update `manifest.json`: `"name"`, `"short_name"`, `"icons"[*].src`
3. Update `<title>` in all HTML files
4. Update `.brand` link text in nav

### Update Styles

- Global changes → `base.css` (edit CSS variables in `:root`)
- Home page → `home.css`
- Page 1 content → `page1.css`
- Page 2 content → `page2.css`

### Bump Cache After Changes

```js
// sw.js — line 2
var CACHE_VERSION = 'v2'; // increment each deployment
```

---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES5-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Service Worker](https://img.shields.io/badge/Service%20Worker-Cache%20API-4caf50?style=flat-square&logo=googlechrome)
![Web App Manifest](https://img.shields.io/badge/Web%20Manifest-PWA-5A0FC8?style=flat-square&logo=pwa)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Cinzel%20%2B%20Crimson-4285F4?style=flat-square&logo=google)

- **No frameworks** — Pure vanilla HTML/CSS/JS
- **No build step** — Open and run directly
- **No dependencies** — No `npm install` needed
- **ES5 compatible** — Broad browser support

---

## 📋 Quick Reference — File Roles

| File | Type | Role | Loaded By |
|------|------|------|-----------|
| `index.html` | HTML | Home / entry point | Browser |
| `page1.html` | HTML | Demo section 01 | Browser |
| `page2.html` | HTML | Demo section 02 | Browser |
| `404.html` | HTML | Not Found error page | `sw.js` |
| `offline.html` | HTML | No-network fallback | `sw.js` |
| `base.css` | CSS | Global design system | All HTML files |
| `home.css` | CSS | Home page layout | `index.html` |
| `page1.css` | CSS | Page 1 layout | `page1.html` |
| `page2.css` | CSS | Page 2 layout | `page2.html` |
| `app.js` | JS | SW registration + install | All HTML files |
| `page1.js` | JS | Page 1 logic | `page1.html` |
| `page2.js` | JS | Page 2 logic | `page2.html` |
| `sw.js` | JS | Service worker | `app.js` |
| `manifest.json` | JSON | PWA metadata | `index.html`, `page1.html`, `page2.html` |
| `Mahmoud.png` | PNG | App icon / logo | HTML files + manifest |

---

<div align="center">

---

Made with ☕ and `#c9a96e` gold  
**FullStackMearn** — A PWA boilerplate for the modern web

![MIT](https://img.shields.io/badge/License-MIT-c9a96e?style=flat-square)

</div>
