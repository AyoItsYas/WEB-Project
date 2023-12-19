import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <section>
      <div>{props.children}</div>
    </section>
  );
}
