"use client";

import React from "react";

import styles from "./layout.module.scss";

export default function Layout(props: {
  product: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className={styles.container}>
        {props.product}

        <div>{props.children}</div>
      </div>
    </section>
  );
}
