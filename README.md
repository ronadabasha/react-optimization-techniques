# Lazy loading modal

## When could be lazy loading useful for Modals?

- When modal have heavy content (like maps, charts, complex forms)
- When modal is not used on page load (for cases when we open modal on button click)
- When we have multiple modals in one page.
- ...etc

## How to implement lazy load for Modals?

1. Create a component for the modal
2. Use `React.lazy()` to import this modal
3. Use `<Suspense />`to provide a fallback UI during lazy loading.

## How to use

1. Clone the repository.
2. Install dependencies and start the dev server:

   ```bash
   npm install
   npm start
   ```
