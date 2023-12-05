import React from 'react';

import ProductView from '@/components/product/ProductView';

import type { Product } from '../../../types';

export default async function Page({ params } : { params: { productId: string } }) {
  const data : Array<Product> = await fetch('http://localhost:3000/api/products.json').then((res) => res.json()).then((res) => res.data)

  const product = data.find((product) => product.id.toString() === params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductView.Details product={product} />;

}

export async function generateStaticParams() {
  const data : Array<Product> = await fetch('http://localhost:3000/api/products.json').then((res) => res.json()).then((res) => res.data)

  return data.map((product) => ({
    productId: product.id.toString()
  }));
}
