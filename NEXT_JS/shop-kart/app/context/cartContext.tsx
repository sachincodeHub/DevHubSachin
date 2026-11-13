
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cartCount: number;
  refreshCartCount: () => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = useState(0);

  const refreshCartCount = async () => {
    try {
      const response = await fetch("/api/cart");
      const data = await response.json();

      const total = data.reduce(
        (sum: number, item: any) => sum + item.quantity,
        0
      );

      setCartCount(total);
    } catch (error) {
      console.log("Cart count error:", error);
    }
  };

  useEffect(() => {
    refreshCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, refreshCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
