import React, { useState, useContext } from "react";

const CartContext = React.createContext();
console.log(CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const found = cartItems.find(
      (cartItem) => cartItem.ProductID === item.ProductID
    );

    // si no encontramos los productos en el carrito
    if (!found) {
      const cartItem = {
        ...item,
        count: 1,
      };
      setCartItems([...cartItems, cartItem]);
    } else {
        //si ya tenemos el producto en el carrito, sumamos la cantidad de ese prod q vamos a comprar
      found.count++;
      setCartItems([...cartItems]);
    }
  };

  const store = {
    cartItems,
    addItem,
  };

  return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
);
}
