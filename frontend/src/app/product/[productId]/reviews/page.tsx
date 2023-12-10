"use client";

import type { ProductReview } from "@/types";
import { useAPI } from "@/utils";
import ProductView from "@/components/product/ProductView";

export default function Page({ params }: { params: { productId: string } }) {
  const data = useAPI<ProductReview[]>("/reviews", {
    productId: params.productId,
    limit: 10,
  });

  if (!data || typeof data === "string") {
    return <div className="loadingIndicator">{data ? data : "Loading..."}</div>;
  }

  return (
    <div>
      {data.map((review) => (
        <ProductView.Review key={review.id} review={review} />
      ))}
    </div>
  );
}
