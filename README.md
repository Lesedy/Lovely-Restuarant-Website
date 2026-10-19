# The Olive Table — Assignment 2

React + Tailwind rebuild of Assignment 1. JavaScript only, Vite, hardcoded data, no extra UI libraries.

## Run locally
Install Node.js (LTS recommended), then run:
```bash
npm install
npm run dev
```
Open the local URL shown by Vite. Verify a production build with `npm run build`.

## Main files
- `src/components/Header.jsx`: navigation and booking CTA
- `src/components/Hero.jsx`: hero
- `src/components/MainContent.jsx`: category filter, menu grid, about and reservation
- `src/components/MenuCard.jsx`: reusable menu card
- `src/components/RatingToggle.jsx`: reusable controlled save toggle
- `src/components/Footer.jsx`: hours and location
- `src/data/menuItems.js`: hardcoded array of menu objects
- `src/index.css`: Tailwind import and minimal global rules; old `styles.css` is not used

## Explain the React
**Filter:** `activeCategory` is state in `MainContent`. Clicking a category calls `setActiveCategory`. React rerenders, and `.filter()` returns only matching items. `All` shows the full array.

**Controlled component:** `MainContent` owns the `favourites` array. It passes `isFavourite` and `onToggleFavourite` to `MenuCard`, which passes them to `RatingToggle`. The toggle has no local state; it displays the prop and calls the parent's callback. The parent updates state, React rerenders, and the new prop controls the button.

## Example small commits
```bash
git add package.json vite.config.js index.html
git commit -m "Scaffold Vite React app with Tailwind"

git add src/components/Header.jsx src/components/Hero.jsx src/App.jsx
git commit -m "Build header and hero components"

git add src/data/menuItems.js src/components/MenuCard.jsx
git commit -m "Move menu items into data file"

git add src/components/MainContent.jsx src/components/RatingToggle.jsx
git commit -m "Add category filter and save toggle"

git add src/components/Footer.jsx src/index.css
git commit -m "Complete responsive Tailwind styling"
```

Keep working in your existing repository and make your own real commits as you build and understand each section. If the old Assignment 1 `styles.css` is present, remove it after migrating the page; the project now uses `src/index.css`. Update example address, hours, prices, and booking email. Test phone, tablet, and desktop widths and be ready to explain `useState`, `.filter()`, `.map()`, `key`, props, and the controlled component.
