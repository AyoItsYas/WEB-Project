import React from 'react';
import type { Product } from '../../../../types';

export default function Page({ params } : { params: { productId: string } }) {
  return <div>Test</div>
}

export async function generateStaticParams() {
  const data : Array<Product> = await fetch('http://localhost:3000/api/products.json').then((res) => res.json()).then((res) => res.data)

  return data.map((product) => ({
    productId: product.id.toString()
  }));
}
