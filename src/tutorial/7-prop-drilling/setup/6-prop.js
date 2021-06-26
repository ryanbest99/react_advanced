import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter(function (person) {
      return person.id !== id;
    });

    setPeople(newPeople);
  };

  return (
    <>
      <h1>Prop Drilling</h1>
      <List people={people} removeItem={removeItem} />
      {/* {people.map(function (person) {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })} */}
    </>
  );
};

const List = ({ people, removeItem }) => {
  return (
    <div>
      {people.map(function (person) {
        const { id, name } = person;
        return (
          <div key={id}>
            <SinglePerson key={id} {...person} removeItem={removeItem} />
          </div>
        );
      })}
    </div>
  );
};

const SinglePerson = ({ id, name, removeItem }) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <button onClick={() => removeItem(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
