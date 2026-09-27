# 🍊 KD Lab Website (`kd.io.vn`)

The official website and product showcase portfolio for **KD Lab** — a Google Play Developer dedicated to crafting mobile applications with a **Privacy-First**, **100% Offline (Zero-Network Architecture)**, and **Zen Minimalist** design philosophy.

[![Website](https://img.shields.io/badge/Live_Site-kd.io.vn-EA580C?style=for-the-badge&logo=cloudflare&logoColor=white)](https://kd.io.vn)
[![Astro](https://img.shields.io/badge/Astro-v5-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Product Showcase](#-product-showcase)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Adding New Applications](#-adding-new-applications)
- [Cloudflare Deployment](#-cloudflare-deployment)
- [Contact & License](#-contact--license)

---

## 🌟 Overview

The **kd.io.vn** website provides an elegant, reliable, and privacy-conscious web presence:
- **Product Portfolio:** Showcases current and upcoming mobile applications published on the Google Play Store.
- **Data Safety & Regulatory Compliance:** Delivers transparent, comprehensive **Privacy Policy** and **Terms of Service** pages tailored to Google Play Console requirements (including explicit zero-telemetry commitments).
- **Press & Brand Kit:** Provides media kits, brand guidelines, downloadable SVG/PNG assets (Light, Dark, Monochrome), and mascot illustrations.
- **Aesthetic Craftsmanship:** Minimalist Japanese-inspired design language harmonizing Washi paper tones (`#FBF9F5` / `#FFFFFF`), Sumi ink dark accents (`#0F0E0D` / `#181614`), and vibrant Zen Orange highlights (`#EA580C`).

---

## ⚡ Key Features

1. **Intelligent Bilingual Support (i18n):**
   - Full localization for **English (`/en/`)** and **Vietnamese (`/vi/`)**.
   - Language selector with persistent user preference in `localStorage`.
   - Client-side smart redirection on root (`/`) based on browser language settings.

2. **Dark & Light Mode:**
   - Seamless theme toggle with persistent preferences.
   - Inline initialization script to prevent Flash of Unstyled Content (zero-FOUC).

3. **Dynamic App Pages:**
   - Automatic generation of dedicated detail pages (`/en/apps/[slug]` & `/vi/apps/[slug]`) driven by centralized metadata in `src/data/apps.ts`.
   - Displays app icons, feature banners, responsive screenshot carousels, release specifications, and changelogs.

4. **Integrated Press Kit & Brand Assets:**
   - Clean vector SVG and transparent PNG assets for logos across various color schemes.
   - High-resolution companion mascots: *Bé Khóa (Lock-bot)*, *Cipher Cat*, and *Byte Dog*.
   - Direct download packages (`.zip`).

5. **SEO & Performance Optimization:**
   - 100/100 Lighthouse performance via Static Site Generation (SSG).
   - Automated canonical URLs, Open Graph (OG) tags, Twitter Cards, and XML sitemap (`sitemap-index.xml`).

---

## 📱 Product Showcase

| Application | Status | Category | Highlights |
| :--- | :---: | :--- | :--- |
| **Simple OTP** | 🚀 *Coming Soon* | Security & 2FA | 100% Offline authenticator, hardware-backed Android Keystore / iOS Keychain AES-256-GCM encryption, zero network permissions, accompanied by interactive security mascots. |
| **Kanso Focus** | 🔬 *In Development* | Productivity & Lifestyle | Minimalist Pomodoro timer paired with ambient nature soundscapes for distraction-free deep work. |
| **Modular Slot** | ⏳ *Available* | Future Showcase | Pre-configured modular slot ready to showcase your next application. |

---

## 🛠️ Tech Stack

- **Core Framework:** [Astro v5](https://astro.build)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`) + Custom CSS Variables & Design Tokens
- **Hosting & Edge Runtime:** [Cloudflare Pages / Workers](https://workers.cloudflare.com) via `@astrojs/cloudflare`
- **Integrations:** `@astrojs/sitemap`, `@astrojs/mdx`
- **Language:** TypeScript & ECMAScript Modules (ESM)
- **Deployment Tooling:** [Wrangler v4](https://developers.cloudflare.com/workers/wrangler/)

---

## 📁 Project Structure

```text
kd-io-vn/
├── public/                     # Static assets
│   ├── assets/
│   │   ├── branding/           # Logos, Mascots (SVG/PNG) & Brand Kit ZIP
│   │   ├── press/              # Press Kit files & media guidelines
│   │   └── simple-otp/         # Simple OTP banners, icons & screenshots
│   ├── favicon.ico / favicon.svg
│   └── .assetsignore
├── src/
│   ├── components/             # Astro UI components
│   │   ├── AppCard.astro       # Application card component
│   │   ├── AppSlotPlaceholder.astro
│   │   ├── ContactSection.astro
│   │   ├── DataSafetyBanner.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LanguagePicker.astro
│   │   ├── Philosophy.astro
│   │   ├── PressKitContent.astro
│   │   ├── PrivacyPageContent.astro
│   │   ├── StatsBar.astro
│   │   └── ThemeToggle.astro
│   ├── config/
│   │   └── site.ts             # Global configuration (site metadata, social links)
│   ├── data/
│   │   ├── apps.ts             # App catalog schema and items
│   │   ├── i18n.ts             # EN / VI dictionary and localization strings
│   │   └── privacyData.ts      # Privacy policy data specifications
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout
│   ├── pages/
│   │   ├── index.astro         # Smart language detection & root redirect
│   │   ├── vi/                 # Vietnamese routes (index, apps/[slug], press, privacy, terms)
│   │   └── en/                 # English routes (index, apps/[slug], press, privacy, terms)
│   └── styles/
│       └── global.css          # Design system, CSS variables & theme tokens
├── astro.config.mjs            # Astro configuration, Tailwind, Cloudflare adapter & i18n
├── wrangler.jsonc              # Cloudflare configuration & Custom Domain routes
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** `>= 22.12.0`
- **npm:** `>= 10.0.0`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server

Standard interactive mode:
```bash
npm run dev
```
> Access the local server at `http://localhost:4321`.

Or run in background mode:
```bash
astro dev --background
```
*Background server management commands:*
- `astro dev status` — Check background server status.
- `astro dev logs` — View dev server logs.
- `astro dev stop` — Stop the background server.

### 3. Build & Preview
```bash
# Generate the production build to ./dist
npm run build

# Preview the local build before deployment
npm run preview
```

---

## ➕ Adding New Applications

To add a new application to the portfolio showcase:

1. Open [`src/data/apps.ts`](file:///Users/timi/work/kd-io-vn/src/data/apps.ts).
2. Append a new object to the `appsData` array following the schema:

```typescript
{
  id: 'my-new-app',
  slug: 'my-new-app',
  isReleased: false,
  status: 'coming_soon', // 'released' | 'coming_soon' | 'in_development' | 'beta'
  name: 'My New App',
  category: {
    en: 'Productivity & Utilities',
    vi: 'Năng suất & Tiện ích',
  },
  version: '1.0.0',
  size: '12.0 MB',
  osRequirement: 'Android 8.0+',
  packageName: 'com.kdlabs.mynewapp',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.kdlabs.mynewapp',
  githubUrl: 'https://github.com/001123/my-new-app',
  iconImage: '/assets/my-new-app/icon.png',
  shortDescription: {
    en: 'Short English description...',
    vi: 'Mô tả ngắn tiếng Việt...',
  },
  fullDescription: {
    en: 'Detailed English description...',
    vi: 'Mô tả chi tiết tiếng Việt...',
  },
  features: {
    en: ['Feature 1', 'Feature 2'],
    vi: ['Tính năng 1', 'Tính năng 2'],
  },
  accentColor: '#EA580C',
}
```

3. Place corresponding graphics (app icon, banners, screenshots) in `public/assets/my-new-app/`.
4. Astro will **automatically generate** detail routes at `/en/apps/my-new-app` and `/vi/apps/my-new-app`, as well as render the card in the main showcase grid.

---

## ☁️ Cloudflare Deployment

The project is preconfigured for **Cloudflare Pages / Workers** deployment via `wrangler.jsonc`.

### 1. Synchronize Cloudflare Worker Types
```bash
npm run cf-typegen
```

### 2. Build and Deploy
```bash
npm run deploy
```
This command compiles the project via `astro build` and deploys the static and edge assets using `wrangler deploy`.

### Custom Domain Routes in `wrangler.jsonc`:
- `kd.io.vn`
- `www.kd.io.vn`

---

## 📬 Contact & License

- **Developer:** KD Lab
- **Google Play:** [KD Lab on Google Play Store](https://play.google.com/store/apps/dev?id=7744040993303027729)
- **General Inquiries:** [contact@kd.io.vn](mailto:contact@kd.io.vn)
- **Technical Support:** [support@kd.io.vn](mailto:support@kd.io.vn)
- **License:** Distributed under the [MIT License](LICENSE).
