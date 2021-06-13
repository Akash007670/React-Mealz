import React from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

const App = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Meals />
      </main>
    </>
  );
};

export default App;
