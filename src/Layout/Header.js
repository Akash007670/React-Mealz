import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import "./HeaderCartButton.css";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>ReactMealz</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="img-container"></div>
    </>
  );
};

export default Header;
