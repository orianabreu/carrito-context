import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("productList.json")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProductsList(response);
      });
    // return () => {
    //     cleanup
    // };
  }, []);

  return (
    <div>
      <h1>Shop products:</h1>
      {productsList.map((product) => {
        return (
          <Product
            key={product.ProductID}
            id={product.ProductID}
            imgURL={product.PictureURL}
            name={product.Name}
            price={product.Price}
            retailtPrice={
              product.Price !== product["Retail Price"] &&
              product["Retail Price"]
            }
          />
        );
      })}
    </div>
  );
};

export default Products;
