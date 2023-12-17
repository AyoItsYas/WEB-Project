import Image from "next/image";

import styles from "./ProductView.module.scss";

import type { Product, ProductReview } from "../../types";

import { useAPI } from "../../utils";

export default function ProductView({ product }: { product: Product }) {
  return (
    <div className={styles.ProductView}>
      <div className={styles.ProductImage}>
        <Image
          src={product.image}
          alt={product.name}
          fill={true}
          priority={true}
        />
      </div>
    </div>
  );
}

ProductView.style = styles;

function ProductDetails({ product }: { product: Product }) {
  const trendingProducts = useAPI<Product[]>("/products/trending");
  return (
    <div className={styles.ProductDetails}>
      <span className={styles.PricingRail}>
        <h1>{product.name}</h1>

        <span className={styles.Indicators}>
          <div className={styles.ProductDiscount}>
            <span>50%</span>
            <span>OFF</span>
          </div>

          <div className={styles.ProductPrice}>
            <span>{product.price}</span>
            <span>LKR</span>
          </div>
        </span>
      </span>

      <p>{product.description}</p>

      <span className={styles.ProductActionButtons}>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </span>
    </div>
  );
}

ProductView.Details = ProductDetails;

function ProductReview({ review }: { review: ProductReview }) {
  return (
    <div className={styles.ProductReview}>
      <p>{review.description}</p>
    </div>
  );
}

ProductView.Review = ProductReview;

export { ProductView };
