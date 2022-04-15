import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import CartContext from "../../store/cart-context";

function Header() {
  const cartCtx = useContext(CartContext);
  // reduce used to convert array into one number
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://png2png.com/wp-content/uploads/2021/08/images-9.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link>
          <div className="header_option">
            <span className="header_optionLineOne">Hello user</span>
            <span className="header_optionLineTwo">SignIn</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineOne header_basketCount">
              {numberOfCartItems}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
