import React from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

const App = () => {
  return (
    <>
      <Header />
      <Cart />
      <main className="main-container">
        <Meals />
      </main>
      <Cart />
    </>
  );
};

export default App;
