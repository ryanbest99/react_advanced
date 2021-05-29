import React from "react";

const ErrorExample = () => {
  const title = "Random Title";
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button onClick={handleClick}>Click</button>
    </React.Fragment>
  );
};

export default ErrorExample;
