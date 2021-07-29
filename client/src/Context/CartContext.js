import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const cartStorageData = JSON.parse(localStorage.getItem('cart')||'[]')
  const [cart, setCart] = useState(cartStorageData);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
}
