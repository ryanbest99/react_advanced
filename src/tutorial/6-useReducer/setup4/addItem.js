import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

const reducer = (state, action) => {
  //
  if (action.type === "ADD_ITEM") {
    //     return { ...state, people: data, showModal: true, modalContent: "added" };
    //     const newItem = { ...state, showModal: true, modalContent: "Added" };
    //     return [newItem, action.payload];
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Added",
    };
  }

  if (action.type === "NO_VALUE") {
    return { ...state, showModal: true, modalContent: "NO VALUES" };
  }
};

const initialState = {
  people: [],
  showModal: false,
  modalContent: "",
};

function Index() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
    } else {
      dispatch({ type: "NO_VALUE" });
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
