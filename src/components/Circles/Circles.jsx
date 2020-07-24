import React from "react";
import "./Circles.css";

const Circles = (props) => (
  <div className="Circles">
    {props.numbers.map((number) => (
      <div
        className={number === props.numberSelected ? "selected" : ""}
        key={number}
      >
        {number}
      </div>
    ))}
  </div>
);

export default Circles;
