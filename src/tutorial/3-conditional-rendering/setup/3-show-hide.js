import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  const change = () => {
    console.log("clicked");
    setShow(!show);
  };

  return (
    <div>
      <button className="btn" onClick={change}>
        Show/Hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  const callBack = () => {
    console.log("rendered");
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  };

  useEffect(callBack, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>size: {size} </h2>
    </div>
  );
};

export default ShowHide;
