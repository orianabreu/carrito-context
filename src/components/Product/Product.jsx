import React from "react";
import { Link } from "react-router-dom";

const Product = ({ imgURL, name, price, retailtPrice, id }) => {
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
      </div>
    </div>
  );
};

export default Product;
