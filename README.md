# React Optimization Techniques

This repository contains isolated examples of React performance and architecture optimization techniques.

## Branches

- [`route-based-lazy-loading`](https://github.com/ronadabasha/react-optimization-techniques/tree/route-based-lazy-loading)

  - Shows route-level lazy loading using `react-router-dom`, `React.lazy()`, `<Suspense />`.
    - `React.lazy()` loads the component only when the route is matched, reducing the initial JS bundle size.
    - `<Suspense />` provides a fallback UI (like a loader) during the lazy load.

- [`slider-lazy-loading`](https://github.com/ronadabasha/react-optimization-techniques/tree/lazy-loading-slider)

  - Demonstrates lazy loading of image sliders.

- [`lazy-loading-modal`](https://github.com/ronadabasha/react-optimization-techniques/tree/lazy-loading-modal)

  - Shows lazy loading for modals using `React.lazy()`, `<Suspense />`.
    Other technologies used: Material UI (MUI) for the Modal.
    - `React.lazy()` loads the Modal only on button click.
    - `<Suspense />` provides a fallback UI (like a loader) during the lazy load.
    - This colud be a good solution when the modal has heavy content (like charts, maps, complex forms ...etc)

## How to use

1. Clone the repository.
2. Checkout the branch you're interested in.
3. Install dependencies and start the dev server:

   ```bash
   npm install
   npm start
   ```
