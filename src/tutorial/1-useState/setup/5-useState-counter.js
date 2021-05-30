import React, { useState } from "react";

const UseStateCounter = () => {
  let [number, setNumber] = useState(0);

  let decrement = () => {
    setNumber(--number);
  };

  let increment = () => {
    setNumber(++number);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button className="decrement btn" onClick={decrement}>
        <h1>-</h1>
      </button>
      <button className="reset btn" onClick={reset}>
        <h1>Reset</h1>
      </button>
      <button className="increment btn" onClick={increment}>
        <h1>+</h1>
      </button>
    </div>
  );
};

export default UseStateCounter;
