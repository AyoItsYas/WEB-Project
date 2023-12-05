import Image from "next/image";

import styles from "./ProductView.module.scss";

import type { Product } from "../../../types";

export default function ProductView({ product }: { product: Product }) {
  return (
    <div className={styles.ProductView}>
      <div className={styles.ProductImage}>
        <Image src={product.image} alt={product.name} fill={true}/>
      </div>
    </div>
  );
}

ProductView.style = styles;

function ProductDetails({ product }: { product: Product }) {
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

export { ProductView };