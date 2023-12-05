"use client";

import React from "react";
import ProductView from "@/components/product/ProductView";

import { useAPI } from "@/utils";

import type { Product } from "../../../types";

export default function Page({ params }: { params: { productId: string } }) {
  const data = useAPI<Product[]>("/products/list");

  if (!data || typeof data === "string") {
    return (
      <section className="loadingIndicator">
        {data ? data : "Loading..."}
      </section>
    );
  }

  const product = data.find(
    (product) => product.id.toString() === params.productId,
  );

  if (!product) {
    return <section>Product not found</section>;
  }

  return <ProductView.Details product={product} />;
}
