import React from "react";

import styles from "./layout.module.scss";

export default function Layout(props: {
  orders: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className={styles.container}>
        <div>{props.children}</div>

        {props.orders}
      </div>
    </section>
  );
}
