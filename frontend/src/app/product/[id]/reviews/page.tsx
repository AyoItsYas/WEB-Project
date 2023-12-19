import type { ProductReview } from "@/types";
import { fetchAPI } from "@/utils";
import ProductView from "@/components/product/ProductView";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchAPI<ProductReview[]>("/reviews", {
    productId: params.id,
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
