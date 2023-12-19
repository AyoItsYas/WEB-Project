import React from "react";
import ProductView from "@/components/product/ProductView";

import { fetchAPI } from "@/utils";

import type { Product } from "../../../types";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchAPI<Product>("/products/get", { id: params.id });

  if (!product || typeof product === "string") {
    return (
      <section className="loadingIndicator">
        {product ? product : "Loading..."}
      </section>
    );
  }

  if (!product) {
    return <section>Product not found</section>;
  }

  return <ProductView.Details product={product} />;
}
