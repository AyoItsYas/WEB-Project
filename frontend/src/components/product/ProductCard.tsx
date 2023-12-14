import Link from "next/link";
import React from "react";
import Image from "next/image";

import styles from "./ProductCard.module.scss";

import type { Product } from "@/types";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div className={`${className} ${styles.ProductCard}`}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.ProductImage}>
          <Image
            src={product.image}
            alt={product.name}
            width={150}
            height={150}
          />
        </div>

        <div className={styles.ProductInfo}>
          <h3>{product.name}</h3>g<label>{product.price} LKR</label>
        </div>
      </Link>
    </div>
  );
}
