"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, []);

  return <section>Redirecting...</section>;
}
