import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
  return <section>{props.children}</section>;
}
