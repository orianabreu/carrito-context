import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Product = ({ imgURL, name, price, retailtPrice, id, product }) => {
  const { addItem } = useCartContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${id}`, { state: { currentProduct: product } });
  };

  return (
    <div className='product-container'>
      <div className='product-container__wrapper'>
        <img src={imgURL} alt={name} className='product-container__img' />

        <div className='product-container__details'>
          <h2>{name}</h2>
          <p>{price}</p>
          <span>{retailtPrice}</span>
        </div>

       
        <button onClick={handleClick} className='product-container__btn'>
          view details
        </button>
       
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
