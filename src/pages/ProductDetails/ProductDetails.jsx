import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export default function ProductDetails() {
    const [details, setDetails] = useState({
        Name: "",
        Price: "",
        PictureURL: "",
        Description: "",
        Stock: ""
    })

    const { addItem } = useCartContext();

    const { ProductID } = useParams(); // el valor que coge useParams SIEMPRE lo transforma en string
    const { product } = useParams();

    useEffect(() => {
        fetch("/productList.json")
        .then(response => response.json())
        .then(response => setDetails(response.find(product => product.ProductID === Number(ProductID))))
    }, [ProductID]);

    const { Name, Price, PictureURL, Description, Stock } = details;

  return (
    <div>
        <img src={PictureURL} alt={Name} />
        <h2>{Name}</h2>
        <button onClick={() => addItem(product)}>shop</button>
        <p>{Price}</p>
        <p>{Description}</p>

        <div>{Stock}</div>
    </div>
  )
}
