import React from "react";

import styles from "./layout.module.scss";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <section>
      <div>{props.children}</div>
    </section>
  );
}
