import React, { useState } from "react";
import { data } from "../../../data";
import Modal from "./Modal";

function Index() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    if (name) {
      setShowModal(true);
      setName("");
      setTimeout(() => {
        setShowModal(false);
      }, 1500);

      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: name },
      ]);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <h1>Index</h1>
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
      {people.map(function (person) {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Index;
