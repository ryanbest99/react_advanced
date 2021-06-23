import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

const reducer = (state, action) => {
  //
};

const initialState = {
  people: [],
  showModal: false,
  modalContent: "",
};

function Index() {
  //   const [people, setPeople] = useState(data);
  //   const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    const newPerson = { id: new Date().getTime().toString(), name };

    if (name) {
      //       setPeople([...people, newPerson]);
      //       setShowModal(true);
      //       setTimeout(() => {
      //         setShowModal(false);
      //       }, 1500);
      //       setName("");
    }
  };

  return (
    <>
      {state.showModal && <Modal modalContent={state.modalContent} />}
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
      {state.people.map(function (person) {
        return (
          <div key={person.id}>
            <h1>{person.name}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Index;
