# Whitepace - SaaS Landing Page

A frontend development practice project to build the **Whitepace SaaS Landing Page** using HTML, CSS, and Tailwind CSS (via CDN), based on a Figma community design.

## Design Reference

**Figma Design:**
[Whitepace - SaaS Landing Page (Community)](https://www.figma.com/design/EbLN4wtuH4b4ZorT88y1k9/Whitepace---SaaS-Landing-Page--Community-?node-id=9-100&p=f&t=kqdMd3ZAestykq09-0)

## Tech Stack

- HTML5
- CSS3
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd interns-tailwindcss-task
   ```

2. Open `index.html` in your browser.

No build tools or installations required — Tailwind CSS is loaded via CDN.

### Tailwind CSS Setup

Include the Tailwind CDN script in your HTML `<head>`:

```html
<script src="js/tailwind.js"></script>
<script src="tailwind.config.js"></script>
```

The Tailwind script is downloaded locally in `js/tailwind.js`. Custom theme colors and fonts are configured in `tailwind.config.js`:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#4F9CF9",
        dark: "#043873",
        accent: "#FFE492",
        light: "#F6F6F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};
```

Use these in your HTML with Tailwind classes like `bg-primary`, `text-dark`, `bg-accent`, etc.

## Project Workflow

This project uses the **GitHub Project Board** as a Scrum board to practice agile workflows.

### How to Use the Scrum Board

1. Navigate to the **Projects** tab in this repository
2. The board is organized into the following columns:
   - **Backlog** - All upcoming tasks and user stories
   - **To Do** - Tasks planned for the current sprint
   - **In Progress** - Tasks currently being worked on
   - **In Review** - Tasks submitted as PRs awaiting code review
   - **Done** - Completed and merged tasks

### Workflow

1. Pick a task from **To Do** and move it to **In Progress**
2. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/<section-name>
   ```
3. Implement the section following the Figma design
4. Commit your changes and push the branch:
   ```bash
   git add .
   git commit -m "feat: add <section-name> section"
   git push origin feature/<section-name>
   ```
5. Create a Pull Request on GitHub:
   - Go to the repository on GitHub
   - Click **"Compare & pull request"** (or go to **Pull requests** > **New pull request**)
   - Set the base branch to `main` and the compare branch to your `feature/<section-name>`
   - Add a clear title and description of what you implemented
   - Request a review from a teammate
   - Move the task to **In Review** on the Scrum board
6. **Do NOT merge directly** — wait for at least one approval from a reviewer
7. After approval, merge the PR and move the task to **Done**

## Project Structure

```
interns-tailwindcss-task/
├── index.html
├── tailwind.config.js
├── js/
│   └── tailwind.js
├── css/
│   └── style.css
├── sections/
│   ├── header/
│   │   ├── header.html
│   │   └── header.css
│   ├── hero/
│   │   ├── hero.html
│   │   └── hero.css
│   ├── features/
│   │   ├── features.html
│   │   └── features.css
│   ├── pricing/
│   │   ├── pricing.html
│   │   └── pricing.css
│   ├── testimonials/
│   │   ├── testimonials.html
│   │   └── testimonials.css
│   ├── cta/
│   │   ├── cta.html
│   │   └── cta.css
│   └── footer/
│       ├── footer.html
│       └── footer.css
├── assets/
│   └── images/
└── README.md
```

## Learning Objectives

- Translating a Figma design into pixel-perfect HTML/CSS
- Using Tailwind CSS utility classes for styling and responsive design
- Practicing Git branching and pull request workflows
- Working with a Scrum board to manage tasks and track progress
