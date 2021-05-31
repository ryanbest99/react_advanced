import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);

  const resize = () => {
    setSize(window.innerWidth);
  };

  const callBack = () => {
    console.log("hello world");
    window.addEventListener("resize", resize);
    return () => {
      console.log("removeResize");
      window.removeEventListener("resize", resize);
    };
  };

  useEffect(callBack);

  return (
    <>
      <h1>Window Size</h1>
      <h2>{size}px</h2>
    </>
  );
};

export default UseEffectCleanup;
