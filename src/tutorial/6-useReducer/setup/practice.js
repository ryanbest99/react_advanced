import React, { useState } from "react";

function Practice() {
  const [number, setNumber] = useState(0);

  const decrement = (e) => {
    e.preventDefault();
    console.log("hello");
    setNumber((prevNum) => prevNum - 1);
  };

  const increment = (e) => {
    e.preventDefault();
    console.log("hello");
    setNumber((prevNum) => prevNum + 1);
  };

  return (
    <div>
      <form>
        <input type="button" value="-" onClick={decrement} />
        <span>{number}</span>
        <input type="button" value="+" onClick={increment} />
      </form>
    </div>
  );
}

export default Practice;
