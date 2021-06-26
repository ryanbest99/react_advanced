import React, { useState } from "react";
import Modal from "./Modal";

function Index() {
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    if (name && age) {
      setShowModal(true);
      setName("");
      setAge("");
      const newPeople = { id: new Date().getTime().toString(), name, age };
      setPeople([...people, newPeople]);

      setTimeout(() => {
        setShowModal(false);
      }, 1000);
    } else {
      alert("Fill out the form");
    }
  };

  const removeItem = (id) => {
    const newPeople = people.filter(function (person) {
      return person.id !== id;
    });

    return setPeople(newPeople);
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
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {people.map(function (person) {
        const { id, name, age } = person;
        return (
          <div key={id} style={{ display: "flex" }}>
            <h3>"name: {name}" </h3>
            <h3>"Age: {age}"</h3>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
