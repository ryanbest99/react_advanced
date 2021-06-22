import React, { useReducer, useState } from "react";
import { data } from "../../../data";
import Modal2 from "./Modal2";

const reducer = (state, action) => {};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

function Index3() {
  //   const [people, setPeople] = useState(data);
  //   const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    defaultState.isModalOpen = true;
    //     setTimeout(() => {
    //       state.isModalOpen = false;
    //     }, 1200);
  };

  return (
    <>
      {state.isModalOpen && <Modal2 modalContent={state.modalContent} />}
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
      {state.people.map(function (person) {
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
