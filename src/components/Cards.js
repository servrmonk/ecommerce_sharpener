import React from "react";
import "../styling/Cards.css";

const Cards = (props) => {
  const { title, price, img } = props.items;
 
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="photoo" />

        <div className="details">
          <p>{title}</p>
          <p>Price: {price}Rs</p>
          <button onClick={() => props.handleClick(props.items)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
