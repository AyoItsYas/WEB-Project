"use client";

import React from 'react';
import Config from '@/config';
import ProductCarousel from '../components/product/ProductCarousel';
import type { Product } from '@/types';
import { useAPI } from '@/utils';

export default function Home() {
  const trendingProducts = useAPI<Product[]>("/products/trending");

  return (
    <div>
      {
        trendingProducts ?
          <ProductCarousel heading="Trending Products" products={trendingProducts}/> :
          <div>Loading...</div>
      }
    </div>
  );
}

