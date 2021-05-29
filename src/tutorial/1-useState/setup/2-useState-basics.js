import React, { useState } from "react";

const UseStateBasics = () => {
  console.log(useState("helloWorld"));

  const [data, setData] = useState("happy world");
  console.log(data);
  console.log(setData);

  const handleClick = () => {
    console.log("hello");
    if (data === "happy world") {
      setData("hello world");
    } else {
      setData("happy world");
    }
  };

  return (
    <div>
      <h2>{data}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default UseStateBasics;
