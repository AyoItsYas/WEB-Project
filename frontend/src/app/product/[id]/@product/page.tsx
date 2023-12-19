import { fetchAPI } from "@/utils";
import ProductView from "@/components/product/ProductView";

import type { Product } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchAPI<Product>("/products/get", { id: params.id });

  if (!product || typeof product === "string") {
    return (
      <div className="loadingIndicator">{product ? product : "Loading..."}</div>
    );
  }

  return <ProductView product={product} />;
}
