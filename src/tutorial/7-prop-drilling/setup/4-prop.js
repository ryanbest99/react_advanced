import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h3>Prop Drilling</h3>
      <List people={people} />
      {/* {people.map(function (person) {
        return (
          <div>
            <h4>{person.name}</h4>
          </div>
        );
      })} */}
    </>
  );
};

const List = ({ people }) => {
  return (
    <div>
      {people.map(function (person) {
        return (
          <div>
            {/* <h4>{person.name}</h4> */}
            <SinglePerson key={person.id} {...person} />
          </div>
        );
      })}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  return (
    <div key={id}>
      <h4>{name}</h4>
    </div>
  );
};

export default PropDrilling;
