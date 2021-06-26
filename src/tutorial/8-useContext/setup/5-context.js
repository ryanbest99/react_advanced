import React, { useState, useContext } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

const ContextAPI = () => {
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
      <PersonContext.Provider value={{ removeItem, people }}>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const data = useContext(PersonContext);
  console.log(data);

  return (
    <div>
      {data.people.map(function (person) {
        const { id, name } = person;
        return <SinglePerson key={id} {...person} />;
      })}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removeItem } = useContext(PersonContext);

  return (
    <div key={id}>
      <h3>{name}</h3>
      <button onClick={() => removeItem(id)}>Remove</button>
    </div>
  );
};

export default ContextAPI;
