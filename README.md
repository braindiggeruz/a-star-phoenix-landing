# A-Star Phoenix Landing Page

Investor-ready landing page for A-Star Phoenix, built with React, Vite, and
Tailwind CSS (v4).

## Project Structure

- `src/components`: UI components (Hero, Agents, Cases, etc.)
- `src/assets`: Static assets (images, icons)
- `src/index.css`: Global styles and Tailwind configuration
- `src/App.tsx`: Main application entry point

## Requirements

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the
   browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Deployment

### GitHub Pages (Automated)

This repository is configured with GitHub Actions to automatically deploy to
GitHub Pages.

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/a-star-phoenix-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable Pages:**
   - Go to Repository Settings -> Pages.
   - Source: "GitHub Actions".
   - The workflow will run automatically and deploy to
     `https://<YOUR_USERNAME>.github.io/a-star-phoenix-landing/`.

### Vercel (Alternative)

1. Import this repository in Vercel.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

## Build Status

Build status: OK (Verified locally)
