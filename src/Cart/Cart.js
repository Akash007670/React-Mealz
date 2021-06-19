import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartItem = (
    <ul className="cart-items">
      {[
        {
          id: "c1",
          name: "Chicken-Biriyani",
          amount: 2,
          price: "Rs.800",
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>Rs.1000</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Close
        </button>
        <button className="order">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
