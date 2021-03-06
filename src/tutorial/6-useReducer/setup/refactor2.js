import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// reducer function
function Index2() {
  const reducer = (state, action) => {
    console.log("hello world");
  };

  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
      {/* {people.map(function (person) {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
          </div>
        );
      })} */}
    </>
  );
}

export default Index2;
