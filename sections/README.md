# sections/

Each section of the landing page has its own folder containing an HTML and CSS file.

## Example Structure

```
sections/
├── header/
│   ├── header.html
│   └── header.css
```

## How to Use

1. Build your section's HTML inside the corresponding `.html` file.
2. Add any custom CSS (beyond Tailwind) in the matching `.css` file.

## Importing into index.html

### Step 1: Include the section HTML in the `<body>` of `index.html`

Use the `w3-include-html` attribute to dynamically load the section:

```html
<body>
  <div w3-include-html="sections/header/header.html"></div>

  <script>
    includeHTML();
  </script>
</body>
```

### Step 2: Import the section CSS in `css/style.css`

Use a relative path from the `css/` folder (go up one level with `../`):

```css
@import "../sections/header/header.css";
```

**Important:** Do NOT use a leading `/` (e.g., `/sections/...`) — that resolves to the server root and will cause a 404. Always use `../` to go up from `css/` to the project root.

Repeat for each section in order: header, hero, features, pricing, testimonials, cta, footer.
