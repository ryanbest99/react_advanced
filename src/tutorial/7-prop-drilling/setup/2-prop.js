import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(function (people) {
      return people.filter((person) => person.id !== id);
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
            {/* <h4>{person.name}</h4> */}
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
    <div key={id} className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
