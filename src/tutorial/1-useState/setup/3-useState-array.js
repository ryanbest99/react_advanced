import React, { useState } from "react";
import data from "../../../data";

const UseStateArray = () => {
  let [people, setPeople] = useState(data);

  const clickHandler = () => {
    console.log("clicked");
    setPeople([]);
  };

  const removeItem = (id) => {
    console.log("removed item btn clicked: " + id);
    let newPeople = people.filter(function (person) {
      console.log("person.id: ", person.id);
      console.log("id: ", id);
      return person.id !== id;
    });
    console.log(newPeople);
    // setPeople(newPeople);
  };

  return (
    <div>
      {people.map(function (person) {
        const { id, name } = person;
        {
          /* console.log(id);
        console.log(name); */
        }
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button className="btn" onClick={clickHandler}>
        CLICK
      </button>
    </div>
  );
};

export default UseStateArray;
