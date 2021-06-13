import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import "./HeaderCartButton.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>ReactMealz</h1>
        <HeaderCartButton />
      </header>
      <div className="img-container"></div>
    </>
  );
};

export default Header;
