import React, { useState } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// reducer function
function Index2() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");

    if (name) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(!true);
      }, 2000);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
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

export default Index2;
