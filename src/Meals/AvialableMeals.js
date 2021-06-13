import React from "react";
import Card from "../UI/Card";
import "./AvialableMeals.css";
const DUMMY_DATA = [
  {
    id: "r1",
    name: "chicken-biriyani",
    price: "Rs 500",
    description: "A Food item which is made by chicken,rice and mixed spices.",
  },
  {
    id: "r2",
    name: "Butter-chicken",
    price: "Rs 800",
    description: "A Food item which is loved most with naan.",
  },
  {
    id: "r3",
    name: "Burger",
    price: "Rs 100",
    description: "A snack item with full of vegies.",
  },
  {
    id: "r4",
    name: "Pizza",
    price: "Rs 1000",
    description: "A snack item with lots of cheese and love.",
  },
];

const AvialableMeals = () => {
  return (
    <>
      <section className="meals">
        <Card>
          <ul>
            {DUMMY_DATA.map((data) => (
              <li key={data.id}>{data.name}</li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
};

export default AvialableMeals;
