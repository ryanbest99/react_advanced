import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter(function (person) {
      return person.id !== id;
    });
    setPeople(function (people) {
      return newPeople;
    });
  };

  return (
    <>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map(function (person) {
        return (
          <div>
            <SinglePerson
              key={person.id}
              {...person}
              removePerson={removePerson}
            />
          </div>
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div key={id}>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
