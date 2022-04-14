import { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Product.css";

function Product(props) {
  const cartCtx = useContext(CartContext);

  const addToBasket = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      rating: props.rating,
      amount: 1,
      price: props.price,
    });
  };

  const price = props.price.toFixed(2);
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
