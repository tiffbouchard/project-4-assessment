import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
  <div className="CircleSelector">
    {props.numbers.map((number) => (
      <button
        className={number === props.numberSelected ? "selected" : ""}
        key={number}
        onClick={() => props.handleButtonClick(number)}
      >
        Select circle {number}
      </button>
    ))}
  </div>
);

export default CircleSelector;
