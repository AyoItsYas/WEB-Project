"use client";

import { useRouter } from "next/navigation";

import { Inter } from "next/font/google";

import "@/styles/globals.scss";
import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { productId: string };
}) {
  const router = useRouter();

  const productData = {
    "name": "BTS Dynamite T-Shirt",
    "price": 29.99,
    "description": "This is a BTS Dynamite T-Shirt",
  }

  const reviewPageURL = `/products/${params.productId}/reviews`;

  router.prefetch(reviewPageURL);

  return (
    <div className={styles.container}>
      <div>
        <h1>
          {productData.name}
        </h1>

        <h2>
          {productData.price}
        </h2>

        <p>
          {productData.description}
        </p>

        <label>
          {params.productId}
        </label>

        <button type="button" onClick={() => router.push(reviewPageURL)}>
          Go to Product Reviews
        </button>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
}
