import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {cartCtx.items.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              amount={item.amount}
              rating={item.rating}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">{cartCtx.totalAmount}</div>
    </div>
  );
}

export default Checkout;
