# Ankush Kumar — Portfolio (React)

Dark theme portfolio (blue / white / black) with terminal-style hero animation,
network background, scroll reveals aur hover animations. Built with React + Vite
+ Framer Motion.

## Run karne ke steps

1. Zip file extract karo aur folder me jao:
   ```bash
   cd portfolio
   ```
2. Dependencies install karo (Node.js 18+ chahiye):
   ```bash
   npm install
   ```
3. Local dev server chalao:
   ```bash
   npm run dev
   ```
   Ye link browser me open karega (usually `http://localhost:5173`).

4. Production build banana ho to:
   ```bash
   npm run build
   ```
   Output `dist/` folder me milega — isse Vercel, Netlify, GitHub Pages
   kahin bhi deploy kar sakte ho.

## Content edit karne ke liye

Sara resume data ek hi jagah hai:
`src/data/resume.js`

Yahan naam, roles, summary, skills, experience, projects, certifications,
education, aur contact details — sab edit kar sakte ho. Baaki components
automatically usi data se render honge.

## Structure

```
src/
  components/   → Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
  data/         → resume.js (saara content yahin se aata hai)
  index.css     → design tokens (colors, fonts) aur global styles
```

## Colors used

- Background: `#05070d` (near-black)
- Card: `#0e1422`
- Accent blue: `#2f6fed` / `#5b9bff`
- Accent cyan: `#38bdf8`
- Text white: `#f4f6fb`

Apna LinkedIn / GitHub link `src/data/resume.js` me `linkedin` aur `github`
fields me daal dena (abhi `#` placeholder hai).
