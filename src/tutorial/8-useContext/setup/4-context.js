import React, { useContext, useState } from "react";
import { data } from "../../../data";

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
      <PersonContext.Provider value={{ removeItem, people }}>
        <h1>useContextAPI</h1>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const data = useContext(PersonContext);
  return (
    <div>
      {data.people.map(function (person) {
        const { id } = person;
        return <SinglePerson key={id} {...person} />;
      })}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  const data = useContext(PersonContext);
  console.log(data);

  return (
    <div>
      <span>{name}</span>
      <button onClick={() => data.removeItem(id)}>Remove</button>
    </div>
  );
};

export default ContextAPI;
