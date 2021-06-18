import React, { useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

const App = () => {
  const [cartShowItem, setCartShowItem] = useState(false);

  const showCartHandler = () => {
    setCartShowItem(true);
  };

  const hideCartHandler = () => {
    setCartShowItem(false);
  };

  return (
    <>
      {cartShowItem && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main className="main-container">
        <Meals />
      </main>
    </>
  );
};

export default App;
