"use client";

import { useAPI } from "@/utils";
import ProductView from "@/components/product/ProductView";

import type { Product } from "../../../../types";

export default function Page({ params }: { params: { productId: string } }) {
  const data = useAPI<Product[]>("/products/list");

  if (!data || typeof data === "string") {
    return <div className="loadingIndicator">{data ? data : "Loading..."}</div>;
  }

  const product = data.find(
    (product) => product.id.toString() === params.productId,
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductView product={product} />;
}
