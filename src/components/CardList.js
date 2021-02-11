import React, { useState } from "react";
import {data} from "../data";
import Card from "./Card";

const CardList = () => {

   return (
    <div className="cardsList">
      <h1>Restaurant</h1>
      {data.map((element) => (
        <Card
          name={element.itemName}
          description={element.description}
          price={element.price}
          foodImage={element.foodImage}
         featured={element.featured}
        isVegetarian={element.isVegetarian}          
        />
      ))}
    </div>
  );
};

export default CardList;