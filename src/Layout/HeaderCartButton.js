import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <>
      <button className="button" onClick={props.onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
