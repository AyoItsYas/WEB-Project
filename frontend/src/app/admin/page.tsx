"use client";

import TabView from "@/components/TabView";

export default function Page() {
  const tabs = [
    <div key={1}>Products</div>,
    <div key={2}>Orders</div>,
    <div key={3}>Users</div>,
  ];
  const tabIds = ["Products", "Orders", "Users"];

  return <TabView tabs={tabs} tabIds={tabIds} />;
}
