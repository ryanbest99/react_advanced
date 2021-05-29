import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "john",
    age: 17,
    message: "hello world",
  });

  console.log(person);

  const changeMessage = () => {
    console.log("clicked");
    if (person.message === "hello world") {
      setPerson({ ...person, message: "happy world" });
    } else {
      setPerson({ ...person, message: "hello world" });
    }
  };

  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </div>
  );
};

export default UseStateObject;
