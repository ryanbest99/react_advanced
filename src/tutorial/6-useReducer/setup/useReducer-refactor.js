import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const reducer = (state, action) => {
    console.log("hi");
  };

  const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: "hello world",
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
};

export default Index;
