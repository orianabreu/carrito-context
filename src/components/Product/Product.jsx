import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Product = ({ imgURL, name, price, retailtPrice, id, product }) => {
  const { addItem } = useCartContext();

  return (
    <div className='product-container'>
      <div className='product-container__wrapper'>
        <img src={imgURL} alt={name} className='product-container__img' />

        <div className='product-container__details'>
          <h2>{name}</h2>
          <p>{price}</p>
          <span>{retailtPrice}</span>
        </div>

        <Link to={`/product-details/${id}`}>
          <button className='product-container__btn'>view details</button>
        </Link>
        <button 
        className='product-container__btn' 
        onClick={() => addItem(product)}
        >
          shop
        </button>
      </div>
    </div>
  );
};

export default Product;
