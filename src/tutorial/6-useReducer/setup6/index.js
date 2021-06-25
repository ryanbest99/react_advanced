import React, { useState } from "react";
import { data } from "../../../data";
import Modal from "./Modal";

function Index() {
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      setName("");
      setShowModal(true);
      const newPerson = { id: new Date().getTime().toString(), name: name };
      setPeople([...people, newPerson]);

      setTimeout(() => {
        setShowModal(false);
      }, 1000);
    }
  };

  const removeItem = (id) => {
    const newPeople = people.filter(function (person) {
      return person.id !== id;
    });

    setPeople(newPeople);
  };

  return (
    <>
      {showModal && <Modal />}
      <form>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
