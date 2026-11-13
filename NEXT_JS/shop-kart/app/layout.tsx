import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "./context/cartContext";

export const metadata: Metadata = {
  title: "ShopKart - Online Shopping",
  description: "Shop the latest products at the best prices.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}