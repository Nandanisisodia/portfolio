# Nandani Sisodia — Developer Portfolio

Personal portfolio website built to showcase my skills, professional experience, and projects as a Full-Stack Software Engineer.

**Live Site:** _add your deployed link here once live, e.g. https://nandani-portfolio.vercel.app_

## Overview

A responsive, single-page portfolio featuring:

- Terminal-style boot intro sequence
- Sticky navigation bar with scroll-spy active-section highlighting
- Skills showcase organized by category (Languages, Frontend, Backend, Databases, Tools, Core CS)
- Timeline-based professional experience section
- Project cards with live demo links, GitHub links, and screenshots
- Live LeetCode stats pulled from a public API, with graceful fallback if the request fails
- Fully responsive layout, down to mobile

## Tech Stack

- **HTML5** — semantic page structure
- **CSS3** — custom design system using CSS variables, Flexbox & Grid, no frameworks
- **JavaScript (Vanilla)** — DOM rendering, IntersectionObserver-based scroll effects, live API integration
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono

## Project Structure

The project follows a component-based structure — each section of the page owns its own CSS file and its own JS module, so you can update one part of the site without touching any other.

```
nandani-portfolio/
├── index.html                    # Main HTML entry point
├── css/
│   ├── base.css                  # Design tokens (CSS variables), reset, typography, shared utilities
│   └── components/
│       ├── loader.css            # Boot intro screen
│       ├── navbar.css            # Sticky nav + mobile menu
│       ├── hero.css              # Hero section + code editor visual
│       ├── skills.css            # Skills grid cards
│       ├── experience.css        # Experience timeline
│       ├── projects.css          # Project cards
│       ├── leetcode.css          # Live LeetCode stats card
│       ├── education.css         # Education list
│       ├── contact.css           # Contact links
│       └── footer.css            # Footer
├── js/
│   ├── data.js                   # All content — skills, experience, projects, education (edit here!)
│   ├── main.js                   # Entry point — imports & initializes every component, in order
│   ├── components/
│   │   ├── skills.js             # Renders the skills grid
│   │   ├── experience.js         # Renders the experience timeline
│   │   ├── projects.js           # Renders project cards
│   │   ├── education.js          # Renders the education list
│   │   ├── navbar.js             # Scroll-spy active link + mobile menu toggle
│   │   ├── loader.js             # Terminal boot intro sequence
│   │   └── leetcode.js           # Live LeetCode stats fetch + render
│   └── utils/
│       └── scrollReveal.js       # Fade-in-on-scroll behaviour shared across sections
├── assets/
│   └── images/
│       ├── Learnify.png
│       └── resumepro.png
├── resume.pdf                    # Downloadable resume (add your own)
└── README.md
```

Each component module only touches its own DOM elements and exports a single `render*()` or `init*()` function. `js/main.js` is the only file that decides *which* components run and *in what order* — this keeps each piece independently readable and easy to hand off, review, or extend.

## Running Locally

No build step or dependencies required — it's plain HTML/CSS/JS.

1. Clone this repository
   ```bash
   git clone https://github.com/Nandanisisodia/portfolio.git
   ```
2. Serve it with a local static server (required — the JS uses ES modules, which browsers block over `file://`):
   ```bash
   npx serve .
   ```
   Then open the URL it prints (usually `http://localhost:3000`).

## Deployment

This site is deployed for free on [Vercel](https://vercel.com) — connected directly to this GitHub repository so every push automatically redeploys.


## Author

**Nandani Sisodia**
[LinkedIn](https://linkedin.com/in/nandani-sisodia-928077338) · [GitHub](https://github.com/Nandanisisodia) · nandanisisodia525@gmail.com
