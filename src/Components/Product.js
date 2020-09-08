import React from "react";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, discription, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <p>{discription}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i, key) => (
              <p>{key} *</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
