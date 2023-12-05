import React from 'react';
import ProductCard from './ProductCard';

import type { Product } from "@/types";


export default function ProductCarousel({ heading, products }: { heading: string; products: Product[] }) {
  return (
    <section>
      <h1>{heading}</h1>

      <div>
        {
          products.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </section>
  );
}