import React from "react";
import { useStateValue } from "../StateProvider";
function CheckoutProduct({ id, title, rating, price, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkout__left">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong> {price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>*</p>
              ))}
          </div>
          <button onClick={removeBasket}>Remove to basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
