# Amaya Luxury Soaps

A modern, responsive e-commerce website for Amaya Luxury Soaps, built with **React**, **Vite**, and **Tailwind CSS**. The site features a beautiful UI, smooth animations, and a fully functional shopping cart, showcasing handcrafted goat milk soaps and related content.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Accessibility & Performance](#accessibility--performance)
- [License](#license)

---

## Features

- **Landing Page** with animated hero section and product highlights
- **Shop** page with product filtering, sorting, and add-to-cart functionality
- **Cart** with persistent state (localStorage), quantity management, and checkout link
- **Journal** (blog) with article previews and placeholder images
- **About** and **Contact** pages with forms and loading states
- **Policies** page for shipping, returns, and privacy info
- **Newsletter** subscription form
- **Responsive design** and smooth transitions
- **Error boundaries** for graceful error handling
- **SEO**-friendly with dynamic `<title>` and meta tags
- **Accessibility** best practices (focus rings, aria labels, reduced motion support)
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
- [React Lazy Load Image Component](https://github.com/Aljullu/react-lazy-load-image-component) (image optimization)

---

## Project Structure

amaya-website/ ├── public/ │ └── vite.svg ├── src/ │ ├── App.tsx │ ├── main.tsx │ ├── index.css │ ├── assets/ │ ├── components/ │ │ ├── CartDropdown.tsx │ │ ├── ErrorBoundary.tsx │ │ ├── Footer.tsx │ │ ├── Header.tsx │ │ ├── Hero.tsx │ │ ├── IconSection.tsx │ │ ├── LoadingSpinner.tsx │ │ ├── NewsletterForm.tsx │ │ ├── ProductCard.tsx │ │ └── ScrollToTop.tsx │ ├── context/ │ │ └── CartContext.tsx │ ├── pages/ │ │ ├── About.tsx │ │ ├── Contact.tsx │ │ ├── Home.tsx │ │ ├── Journal.tsx │ │ ├── NotFound.tsx │ │ ├── Policies.tsx │ │ └── Shop.tsx │ ├── types/ │ │ ├── index.ts │ │ └── react-lazy-load-image-component.d.ts │ └── utils/ │ ├── constants.ts │ └── imageUtils.ts ├── index.html ├── package.json ├── tailwind.config.js ├── postcss.config.cjs ├── tsconfig.json ├── tsconfig.node.json └── vite.config.ts

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (v8+ recommended)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/amaya-website.git
   cd amaya-website
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```

## Available Scripts
npm run dev — Start the Vite development server with HMR
npm run build — Build the app for production (outputs to dist/)
npm run preview — Preview the production build locally
npm run lint — Run ESLint on all source files
npm run type-check — Run TypeScript type checking

## Customization

- ### Branding & Content:
Update product data, articles, and company info in constants.ts and page components in src/pages/.

- ### Styling:
Tailwind CSS is configured in tailwind.config.js and index.css.
You can easily adjust the color palette, fonts, and animations.

- ### Images:
Product and article images use Unsplash URLs and SVG placeholders for performance and fallback.
See constants.ts and imageUtils.ts.

## Accessibility & Performance

- Uses semantic HTML, focus management, and ARIA attributes.
- Supports reduced motion for users with accessibility needs.
- Fonts and CSS are preloaded for faster rendering.
- Images are lazy-loaded and optimized for different screen sizes.
- Error boundaries prevent the app from crashing on runtime errors.

## License

This project is for demonstration and educational purposes.
For commercial use, please replace all demo content and review third-party licenses.

Made with ❤️ by the prateekCodeLab

