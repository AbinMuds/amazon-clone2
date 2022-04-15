import React, { useContext } from "react";
import "./Subtotal.css";
import CartContext from "../../store/cart-context";

function Subtotal() {
  const cartCtx = useContext(CartContext);
  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({cartCtx.length} items) :{" "}
          <strong>{cartCtx.totalAmount.toFixed(2)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a giftß
        </small>
      </>

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
