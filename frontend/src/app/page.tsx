"use client";

import React from "react";
import ProductCarousel from "../components/product/ProductCarousel";
import type { Product } from "@/types";
import { useAPI } from "@/utils";

export default function Home() {
  const data = useAPI<Product[]>("/products/trending");

  if (!data || typeof data === "string") {
    return <div className="loadingIndicator">{data ? data : "Loading..."}</div>;
  }

  return (
    <>
      <section>
        <ProductCarousel
          id="new-arrivals"
          heading="New Arrivals"
          products={data}
        />
      </section>

      <section id="trending">
        <ProductCarousel heading="Trending Products" products={data} />
      </section>
    </>
  );
}
