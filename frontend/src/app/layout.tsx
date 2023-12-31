import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

import { FaCartShopping, FaUser } from "react-icons/fa6";

import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KpopFiesta",
  description:
    "Welcome to KpopFiesta, your ultimate destination for exclusive K-pop fan items! Immerse yourself in a world of trendy clothing, collectibles, and branded merchandise that celebrate the vibrant and electrifying spirit of K-pop. From stylish apparel that lets you flaunt your bias to must-have mugs that make your coffee breaks a little more exciting, KpopFiesta brings you closer to the heartbeat of your favorite K-pop stars. Join the celebration and show off your passion for K-pop with our curated selection of fan essentials. Elevate your fandom experience at KpopFiesta – where the love for K-pop meets irresistible style!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar>
          <NavBar.Item>
            <a href="/login">
              <FaUser />
            </a>
          </NavBar.Item>

          <NavBar.Item>
            <a href="/cart">
              <FaCartShopping />
            </a>
          </NavBar.Item>
        </NavBar>

        {children}

        <Footer />
      </body>
    </html>
  );
}
