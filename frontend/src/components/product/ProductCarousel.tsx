import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductCarousel.module.scss";

import type { Product } from "@/types";

export default function ProductCarousel({
  id,
  heading,
  products,
}: {
  id?: string;
  heading: string;
  products: Product[];
}) {
  return (
    <div id={id} className={styles.ProductCarousel}>
      <div className={styles.Railing}>
        <h2>{heading}</h2>
        <label>See More</label>
      </div>

      <div className={styles.ProductCarouselInner}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
