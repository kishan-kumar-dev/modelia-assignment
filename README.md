````md
# Modelia AI Studio Assignment

## Overview

Modelia AI Studio is a simplified AI-powered fashion studio web app built with **React + TypeScript + Vite**.  
Users can upload images, type prompts, select styles, and generate mock AI fashion visuals.

This project demonstrates modern front-end engineering practices including accessibility, error handling, performance optimizations, local storage persistence, and responsive design.

---

## Features

- **Image Upload & Preview**
  - Supports PNG/JPG images (≤10MB)
  - Client-side downscaling for large images
- **Prompt Input**
  - Enter a text prompt for AI generation
- **Style Selection**
  - Choose from multiple fashion styles: Editorial, Streetwear, Vintage
- **Mock AI Generation**
  - Simulates AI generation with 1–2s delay
  - 20% chance of simulated errors
- **Abort In-Flight Request**
  - Cancel ongoing generation requests
- **Loading Spinner**
  - Visual feedback while generating
- **Automatic Retry**
  - Exponential backoff (max 3 attempts) on error
- **History**
  - Stores last 5 generations in `localStorage`
  - Click to restore previous results
- **Accessibility**
  - Keyboard navigable
  - Visible focus states
  - ARIA attributes
- **Performance Optimizations**
  - Memoized components (React.memo)
  - Lazy-loaded components
- **Error Boundaries**
  - Prevents app crash on runtime errors
- **Responsive Design**
  - Works on desktop and mobile
- **TailwindCSS Styling**
  - Modern and clean UI

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (fast bundler with HMR)
- **TailwindCSS**
- **ESLint + Prettier** (linting & formatting)
- **LocalStorage Hooks** (history persistence)
- **Optional Bonus Features**
  - Memoization & Lazy loading
  - Error boundaries

---

## Installation

1. Clone the repository:

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd modelia-assignment
```
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:5173
```

---

## Scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start Vite development server           |
| `npm run build`   | Build production-ready app              |
| `npm run preview` | Preview production build                |
| `npm run lint`    | Run ESLint checks                       |
| `npm run format`  | Run Prettier formatting on source files |

---

## Folder Structure

```
modelia-assignment/
├─ src/
│  ├─ components/        # React components
│  │  ├─ HistoryList.tsx
│  │  ├─ ImageUploader.tsx
│  │  ├─ PromptInput.tsx
│  │  ├─ Spinner.tsx
│  │  └─ StyleSelector.tsx
│  ├─ hooks/             # Custom hooks
│  │  ├─ useGenerateImage.ts
│  │  └─ useLocalStorage.ts
│  ├─ utils/             # Utility functions
│  │  ├─ api.ts
│  │  └─ resizeImage.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ package.json
├─ tsconfig.json
├─ .eslintrc.js
├─ prettier.config.cjs
├─ .prettierignore
├─ README.md
└─ AI_USAGE.md
```

---

## Notes

- All code is **TypeScript strict mode** compatible.
- **ESLint + Prettier** used for linting and formatting.
- Bonus features included:
  - Memoization & lazy loading
  - Error boundaries

- History persists across page reloads via `localStorage`.
- Components are accessible and responsive.
- Mock API simulates AI generation with retry and abort logic.

---

## Contact

For questions or clarifications, contact:

**\[Your Name]** Kishan Kumar

---
