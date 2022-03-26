import React from 'react';
import { useCartContext } from '../../context/CartContext';

export default function Cart() {
    const { cartItems } = useCartContext();

  return (
    <div>
        <h2>Your products:</h2>
        {cartItems.map((item, index) => {
            return (
                <li key={index}>
                    {item.Name}: {item.count}
                </li>
            )
        })}
        <button>Shop</button>
    </div>
  )
}
