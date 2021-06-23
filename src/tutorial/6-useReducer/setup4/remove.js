import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

const reducer = (state, action) => {
  //
  if (action.type === "ADD_ITEM") {
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

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(function (person) {
      return person.id !== action.payload;
    });

    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Item Removed",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
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
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const removeItem = (person) => {
    dispatch({ type: "REMOVE_ITEM", payload: person.id });
  };

  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
            <span>{person.name}</span>
            <button onClick={() => removeItem(person)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
