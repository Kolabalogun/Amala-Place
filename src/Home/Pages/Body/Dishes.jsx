import React from "react";
import Item from "../../Cart/Item";
import { useGlobalContext } from "../../Functions/Context";



const Dishes = () => {
  const { Array } = useGlobalContext();

  const DishesElement = Array.map((EachItem) => (
    <Item
      key={EachItem.id}
      id={EachItem.id}
      name={EachItem.name}
      price={EachItem.price}
      value={EachItem.value}
    />
  ));

  return (
    <div className="rice">
      <h1 id="#rice">Rice Dishes</h1>

      <div className="ricemenu">{DishesElement}</div>
    </div>
  );
};

export default Dishes;
