import React, { useState } from "react";
import { data } from "../../../data";

function Prop() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log("remove");

    const newPeople = people.filter(function (person) {
      return person.id !== id;
    });

    setPeople(newPeople);
  };

  return (
    <>
      <h1>hello</h1>
      <List people={people} removeItem={removeItem} />
      {/* {people.map(function (person) {
        const { id, name } = person;
        return (
          <div key={id}>
            <span>{name}</span>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })} */}
    </>
  );
}

const List = ({ people, removeItem }) => {
  return (
    <div>
      {people.map(function (person) {
        const { id, name } = person;
        return (
          <div key={id}>
            <SinglePerson key={id} {...person} removeItem={removeItem} />
            {/* <span>{name}</span>
            <button onClick={() => removeItem(id)}>Remove</button> */}
          </div>
        );
      })}
    </div>
  );
};

const SinglePerson = ({ id, name, removeItem }) => {
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => removeItem(id)}>Remove</button>
    </div>
  );
};

export default Prop;
