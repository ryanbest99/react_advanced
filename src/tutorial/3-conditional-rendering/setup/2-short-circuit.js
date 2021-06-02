import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = "hello world" && text;

  const btnClick = () => {
    console.log("clicked");
    setIsError(true);
  };

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1> value: {secondValue}</h1> */}

      <h1>{text || "Hi"}</h1>
      <button className="btn" onClick={btnClick}>
        Click
      </button>
      {/* {isError && <h1>Happy World</h1>} */}
      {isError ? (
        <h1> There's an Error </h1>
      ) : (
        <div>
          <h2>No Errors</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
