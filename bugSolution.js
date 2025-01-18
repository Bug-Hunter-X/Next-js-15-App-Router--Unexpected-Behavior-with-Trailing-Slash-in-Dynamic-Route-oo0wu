```javascript
// app/api/products/[id]/route.js
export async function GET(request) {
  const { params } = request;
  const id = params.id;

  // Fetch product data based on ID (replace with your actual logic)
  const product = await getProduct(id);

  return new Response(JSON.stringify(product));
}
```
```javascript
// app/layout.js
import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/products/1">Product 1</Link>
          <Link href="/products/2">Product 2</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
```
```javascript
// app/products/[id]/page.js
export default function ProductDetails({ params }) {
  // Access the dynamic route parameter 'id'
  const { id } = params;
  return <div>Product details for ID: {id}</div>;
}
```