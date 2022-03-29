import React from 'react';
import { useCartContext } from '../../context/CartContext';

export default function Cart() {
    const { cartItems, deleteItem } = useCartContext();

  return (
    <div>
        <h2>Your products:</h2>
        {cartItems.map((item, index) => {
            return (
                <div key={index}>
                    <li>
                        {item.Name}: {item.count}
                    </li>
                    <p>${item.price}</p>
                    <span onClick={() => deleteItem(index)}>🗑</span>
                </div>
            )
        })}
        <h3>Total: ${cartItems.reduce((prevProduct, currentProduct) => {
            console.log("esto es prevProd:" + prevProduct);
            console.log("esto es currentProd:" + currentProduct);
            return prevProduct + currentProduct.price;
        }, 0)}</h3>
        <button>Shop</button>
    </div>
  )
}
