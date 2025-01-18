# Next.js 15 App Router: Trailing Slash Issue in Dynamic Routes

This repository demonstrates an unexpected behavior in Next.js 15's App Router when using dynamic routes with trailing slashes.  The issue occurs when navigating to a route with a trailing slash; the page doesn't render as expected.

## Bug Description

When using a dynamic route like `/products/[id]/`, adding a trailing slash (`/products/[id]`) causes the application to not find the page or renders an unexpected result.  This is inconsistent with the behavior in previous Next.js versions or with other routing systems.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/products/1/`.  Expect to see the product details, but the app may render a 404 or a different, incorrect page.

## Solution

The solution involves carefully handling trailing slashes in your routes. You may need to adjust your routing logic and possibly add redirects to ensure a consistent user experience.