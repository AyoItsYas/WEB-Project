"use client";

import { useAPI } from "@/utils";
import ProductView from "@/components/product/ProductView";

import type { Product } from "../../../../types";

export default function Page({ params }: { params: { productId: string } }) {
  const product = useAPI<Product>("/products/get", { id: params.productId });

  if (!product || typeof product === "string") {
    return (
      <div className="loadingIndicator">{product ? product : "Loading..."}</div>
    );
  }

  return <ProductView product={product} />;
}
