import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://www.seoclerk.com/pics/trade2684-1KYOoJ1416509800.jpg"
          className="checkout__ad"
          alt="0"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Basket empty</h2>
            <p>Please go and add some products</p>
          </div>
        ) : (
          <div className="basket__products">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
