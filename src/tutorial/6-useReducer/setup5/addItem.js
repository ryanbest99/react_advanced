import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

const reducer = (state, action) => {
  //
  if (action.type === "ADDED_VALUE") {
    //     return { ...state, showModal: true, modalContent: "added successfully" };
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "added successfully",
    };
  }

  if (action.type === "NO_VALUE") {
    //     return { ...state, showModal: true, modalContent: "added successfully" };
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      showModal: true,
      modalContent: "No Value",
    };
  }
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
    console.log("handleSubmit");

    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "ADDED_VALUE", payload: newPerson });
      setName("");
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
            <h3>{person.name}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Index;
