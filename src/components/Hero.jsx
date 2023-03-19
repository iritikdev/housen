import React from "react";
import InputGroup from "./InputGroup";

function Hero(props) {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="title">Find your ideal home</h1>
        <p className="subtitle">
          Search from more than 19 million of inspected apartments, houses,
          cottages, villas, manors and mansions
        </p>
        <InputGroup />
      </div>
    </div>
  );
}

export default Hero;
