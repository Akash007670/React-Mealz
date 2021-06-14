import React from "react";
import "./Cart.css";

const Cart = () => {
  const cartItem = (
    <ul className="cart-item">
      {[
        {
          id: "c1",
          name: "Chicken-Biriyani",
          price: "Rs.800",
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>Rs.1000</span>
      </div>
      <div className="action">
        <button className="close">Close</button>
        <button className="order">Order</button>
      </div>
    </div>
  );
};

export default Cart;
