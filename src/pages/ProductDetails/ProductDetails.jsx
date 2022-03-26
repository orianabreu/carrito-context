import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const [details, setDetails] = useState({
        Name: "",
        Price: "",
        PictureURL: "",
        Description: "",
        Stock: ""
    })

    const { ProductID } = useParams(); // el valor que coge useParams SIEMPRE lo transforma en string

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
        <p>{Price}</p>
        <p>{Description}</p>

        <div>{Stock}</div>
    </div>
  )
}
