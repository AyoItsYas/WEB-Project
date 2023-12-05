import React from "react";

import styles from "./layout.module.scss";

export default function Layout(props: { product: React.ReactNode, children : React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div>{props.product}</div>

      <div>{props.children}</div>
    </div>
  );
}
