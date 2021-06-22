import React, { useState } from "react";
import { data } from "../../../data";
import Modal2 from "./Modal2";

function Index3() {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1200);
  };

  return (
    <>
      {showModal && <Modal2 />}
      <form className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      {people.map(function (person) {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
}

export default Index3;
