# Amaya Luxury Soaps

A modern, responsive e-commerce website for Amaya Luxury Soaps, built with **React**, **Vite**, and **Tailwind CSS**. The site features a beautiful UI, smooth animations, and a fully functional shopping cart, showcasing handcrafted goat milk soaps and related content.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development & Build](#development--build)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [Known Issues & Fixes](#known-issues--fixes)
- [Recommendations & Next Steps](#recommendations--next-steps)
- [Customization](#customization)
- [Accessibility & Performance](#accessibility--performance)
- [License](#license)

---

## Overview

**Amaya Luxury Soaps** is a demo e-commerce platform for a luxury soap brand. It demonstrates best practices in modern frontend development, including accessibility, performance, code splitting, and state management. The site includes a landing page, shop, journal, about, contact, and policies pages, with a persistent cart and newsletter signup.

---

## Features

- **Landing Page** with animated hero and product highlights
- **Shop** with product filtering, sorting, and add-to-cart
- **Cart** with persistent state (localStorage), quantity management, and checkout
- **Journal** (blog) with article previews and categories
- **About** and **Contact** pages with forms and loading states
- **Policies** page for shipping, returns, and privacy info
- **Newsletter** subscription form
- **Responsive design** and smooth transitions
- **Error boundaries** for graceful error handling
- **SEO**-friendly with dynamic `<title>` and meta tags
- **Accessibility** best practices (focus rings, aria labels, reduced motion)
- **Performance** optimizations (code splitting, lazy loading, font preloading)

---

## Tech Stack

- [React](https://react.dev/) (with hooks and context)
- [Vite](https://vitejs.dev/) (fast dev/build tool)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [React Router](https://reactrouter.com/) (routing)
- [React Hook Form](https://react-hook-form.com/) (forms)
- [React Helmet Async](https://github.com/staylor/react-helmet-async) (SEO)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [React Lazy Load Image Component](https://github.com/Aljullu/react-lazy-load-image-component) (image optimization)

---

## Project Structure

```
amaya-website/
├── public/                # Static assets (e.g., favicon)
├── src/
│   ├── App.tsx            # Main app and route definitions
│   ├── main.tsx           # React entry point
│   ├── index.css          # Tailwind and global styles
│   ├── assets/            # Images and static assets
│   ├── components/        # Reusable UI components
│   ├── context/           # React context (e.g., CartContext)
│   ├── pages/             # Page components (Home, Shop, About, etc.)
│   ├── types/             # TypeScript types/interfaces
│   ├── utils/             # Utility functions/constants
│   └── router.tsx         # React Router configuration
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.cjs     # PostCSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

**Key folders/files:**

- `src/components/`: UI components (Header, Footer, ProductCard, etc.)
- `src/pages/`: Route-based pages (Shop, Journal, About, Contact, Policies, NotFound)
- `src/context/CartContext.tsx`: Cart state management (add, remove, update, persist)
- `src/utils/constants.ts`: Product/article data and image placeholders
- `src/types/`: TypeScript interfaces for products, articles, forms, etc.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (v8+ recommended)

---

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/amaya-website.git
   cd amaya-website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---

## Development & Build

- **Start the development server:**
  ```sh
  npm run dev
  ```
  This runs Vite with hot module replacement at [http://localhost:3000](http://localhost:3000).

- **Build for production:**
  ```sh
  npm run build
  ```
  Output is generated in the `dist/` folder.

- **Preview the production build:**
  ```sh
  npm run preview
  ```

---

## Available Scripts

- `npm run dev` — Start the Vite development server with HMR
- `npm run build` — Build the app for production (outputs to `dist/`)
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint on all source files
- `npm run type-check` — Run TypeScript type checking
- `npm run clean` — Remove `node_modules`, `dist`, and Vite cache

---

## Testing

- **Manual Testing:**  
  The project does not include automated tests. Test manually by running the dev server and interacting with all pages and features.
- **Type Checking:**  
  Run `npm run type-check` to ensure type safety.
- **Linting:**  
  Run `npm run lint` to check for code style and errors.

---

## Dependencies

See [package.json](package.json) for full details.

**Main dependencies:**
- `react`, `react-dom`
- `react-router-dom`
- `react-helmet-async`
- `react-hook-form`
- `framer-motion`
- `react-icons`
- `tailwindcss`, `postcss`, `autoprefixer`
- `vite`, `@vitejs/plugin-react`
- `typescript`

---

## Known Issues & Fixes

- **No automated tests:**  
  There are currently no unit or integration tests. Manual QA is required.
- **No backend integration:**  
  All product, article, and form data is static or simulated. No real checkout or newsletter backend.
- **404 on direct navigation (production):**  
  If deploying to static hosting, ensure all routes fallback to `index.html` (see Vite docs for SPA deployment).
- **Color classes (e.g., `bg-gold-600`, `bg-cream-50`):**  
  Some custom color classes are used in components but not defined in `tailwind.config.js`.  
  **Fix:** Add these colors to the Tailwind config or replace with existing palette colors.

---

## Recommendations & Next Steps

- **Add automated tests:**  
  Integrate [Jest](https://jestjs.io/) or [React Testing Library](https://testing-library.com/) for component and integration testing.
- **Backend integration:**  
  Connect forms and checkout to a real backend (e.g., Firebase, Supabase, or custom API).
- **Accessibility audit:**  
  Use tools like [axe](https://www.deque.com/axe/) or Lighthouse to further improve accessibility.
- **Performance optimization:**  
  Consider image CDN, further code splitting, and bundle analysis for production.
- **Add CI/CD:**  
  Set up GitHub Actions or similar for linting, type-checking, and deployment.
- **Expand product features:**  
  Add product detail pages, user authentication, order history, etc.

---

## Customization

- **Branding & Content:**  
  Update product data, articles, and company info in [`src/utils/constants.ts`](src/utils/constants.ts) and page components in [`src/pages/`](src/pages/).

- **Styling:**  
  Tailwind CSS is configured in [`tailwind.config.js`](tailwind.config.js) and [`src/index.css`](src/index.css).  
  Adjust the color palette, fonts, and animations as needed.

- **Images:**  
  Product and article images use Unsplash URLs and SVG placeholders for performance and fallback.  
  See [`src/utils/constants.ts`](src/utils/constants.ts) and [`src/utils/imageUtils.ts`](src/utils/imageUtils.ts).

---

## Accessibility & Performance

- Uses semantic HTML, focus management, and ARIA attributes.
- Supports reduced motion for users with accessibility needs.
- Fonts and CSS are preloaded for faster rendering.
- Images are lazy-loaded and optimized for different screen sizes.
- Error boundaries prevent the app from crashing on runtime errors.

---

## License

This project is for demonstration and educational purposes.  
For commercial use, please replace all demo content and review third-party licenses.

Made with ❤️ by the prateekCodeLab

