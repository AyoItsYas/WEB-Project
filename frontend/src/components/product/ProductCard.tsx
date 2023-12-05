import React from "react";
import Image from "next/image";

import styles from "./ProductCard.module.scss";

import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductImage}>
        <Image src={product.image} alt={product.name} fill={true} />
      </div>

      <div className={styles.ProductInfo}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
