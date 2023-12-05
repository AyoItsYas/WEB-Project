import Link from 'next/link';
import React from 'react';

export default function Home({ children }: { children: React.ReactNode }) {
  return <div>Home Page

    <Link href="/product/1">Product Page</Link>
  </div> ;
}

