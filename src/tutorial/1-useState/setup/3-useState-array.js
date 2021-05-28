import React, { useState } from "react";
import data from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  // console.log(data);
  // console.log(people);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        console.log(id, name);
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            {/* <button className="btn">Delete</button> */}
          </div>
        );
      })}

      <button className="btn" type="button" onClick={() => setPeople([])}>
        Click
      </button>
    </>
  );
};

export default UseStateArray;
