import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../components/Product/Product";

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    // fetch("productList.json")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     setProductsList(response);
    //   });
    
    axios
    .get("productList.json")
    .then(response => setProductsList(response.data))
  }, []);

  return (
    <div>
      <h1>Shop products:</h1>
      {productsList.map((product) => {
        return (
          <Product
            key={product.ProductID}
            id={product.ProductID}
            product={product}
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
