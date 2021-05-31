import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const callBack = () => {
    console.log("call useEffect");
    if (value > 1) {
      document.title = `Look ${value}`;
    }
  };

  const callBack2 = () => {
    console.log("call2 useEffect");
    if (value > 1) {
      document.title = `Look ${value * 2}`;
    }
  };

  useEffect(callBack, []);
  useEffect(callBack2, [value]);

  console.log("render component");

  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Look ${value}`;
  // });

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
