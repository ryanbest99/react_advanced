import React, { useState } from "react";

const UseStateCounter = () => {
  console.log("counter");

  let [number, setNumber] = useState(0);
  console.log(number);

  let decrement = () => {
    console.log("decrement");
    setNumber(--number);
  };

  let increment = () => {
    console.log("decrement");
    setNumber(++number);
  };

  return (
    <div>
      <button className="decrement" onClick={decrement}>
        <h1>-</h1>
      </button>
      <h1>{number}</h1>
      <button className="increment" onClick={increment}>
        <h1>+</h1>
      </button>
    </div>
  );
};

export default UseStateCounter;
