"use client";

import React from "react";
import ProductCarousel from "../components/product/ProductCarousel";
import type { Product } from "@/types";
import { useAPI } from "@/utils";

export default function Home() {
  const latestProducts = useAPI<Product[]>("/products/latest");
  const trendingProducts = useAPI<Product[]>("/products/trending");

  return (
    <>
      <section>
        <ProductCarousel
          id="latest"
          heading="Latest Products"
          products={latestProducts}
        />
      </section>
      <section>
        <ProductCarousel
          id="trending"
          heading="Trending Products"
          products={trendingProducts}
        />
      </section>
    </>
  );
}
