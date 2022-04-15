import { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./CheckoutProduct.css";

function CheckoutProduct(props) {
  const cartCtx = useContext(CartContext);
  const removeFromBasket = (id) => {
    cartCtx.removeAllItem(id);
  };
  return (
    <div className="checkoutProduct" key={props.id}>
      <img className="checkoutProduct_image" src={props.image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{props.title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{props.price}</strong>
          <span className="">x {props.amount}</span>
        </p>
        <div className="checkoutProduct_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        <p></p>
        <button onClick={removeFromBasket.bind(null, props.id)}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
