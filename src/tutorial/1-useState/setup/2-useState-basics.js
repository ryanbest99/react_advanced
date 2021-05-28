import React, { useState } from "react";

const UseStateBasics = () => {
  // const value = "helloworld";
  // const value2 = useState(1);
  // console.log(useState(value));
  // console.log(value2);
  // console.log(value2[0]);

  const [text, setText] = useState("hello");

  const handleClick = () => {
    console.log("hello");
    if (text === "hello") {
      setText("hello world");
    } else if (text === "hello world") {
      setText("hello");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Click
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
