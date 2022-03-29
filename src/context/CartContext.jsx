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
        price: item.Price
      };
      setCartItems([...cartItems, cartItem]);
    } else {
        //si ya tenemos el producto en el carrito, sumamos la cantidad de ese prod q vamos a comprar
      found.count++;
      found.price = found.price * found.count;
      setCartItems([...cartItems]);
    }
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item, index) => {
      return index !== id;
    }))
  }

  const store = {
    cartItems,
    addItem,
    deleteItem
  };

  return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
);
}
