import React from "react";

import "./layout.scss";

export default function Layout(props: {
  product: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="container">
        {props.product}

        <div>{props.children}</div>
      </div>
    </section>
  );
}
