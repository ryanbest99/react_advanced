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

  const callback = () => {
    console.log("Callback works");
    // setNumber(++number);
    setNumber((number) => {
      console.log(number);
      return number + 1;
    });
  };

  const complexIncrease = () => {
    console.log("complex");
    setTimeout(callback, 1500);
  };

  return (
    <section>
      <div>
        <h1>Functional Update Form</h1>
        <br />
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
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>Complex Increase</h1>
        <br />
        <h1>{number}</h1>
        <button className="btn " onClick={complexIncrease}>
          <h1>Increase Later</h1>
        </button>
      </div>
    </section>
  );
};

export default UseStateCounter;
