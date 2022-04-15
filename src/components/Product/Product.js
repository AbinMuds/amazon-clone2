// import React from "react";
// import ProductItem from "./ProductItem";
// import "./Product.css";

// function Product(props) {
//   return (
//     <div className="product">
//       <ProductItem
//         id={props.id}
//         title={props.title}
//         rating={props.rating}
//         image={props.image}
//         amount={props.amount}
//         price={props.price}
//       />
//     </div>
//   );
// }

// export default Product;

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
      image: props.image,
      amount: 1,
      price: props.price,
    });
  };

  const price = props.price.toFixed(2);
  return (
    <div className="product" key={props.id}>
      <div className="product_info" key={props.id}>
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
