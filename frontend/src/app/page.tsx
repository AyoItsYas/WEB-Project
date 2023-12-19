import React from "react";
import ProductCarousel from "../components/product/ProductCarousel";
import type { Product } from "@/types";
import { fetchAPI } from "@/utils";

export default async function Home() {
  const latestProducts = await fetchAPI<Product[]>("/products/latest");
  const trendingProducts = await fetchAPI<Product[]>("/products/trending");

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
