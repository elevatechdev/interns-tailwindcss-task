# css/

Contains custom stylesheets for the project.

## Files

- **style.css** - Custom styles that go beyond Tailwind utility classes. Use this for any CSS that can't be achieved with Tailwind alone (e.g., custom animations, complex selectors).

## Usage

The stylesheet is already linked in `index.html`. You can use Tailwind's `@apply` directive here to create reusable component classes:

```css
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold;
}
```
