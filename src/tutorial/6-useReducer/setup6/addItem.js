import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    //     const newPeople = action.payload;
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Item Added",
    };
  }

  if (action.type === "NO_ITEM") {
    return { ...state, showModal: true, modalContent: "NO ITEM" };
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
    console.log("hihi");

    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
    } else {
      dispatch({ type: "NO_ITEM" });
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
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
}

export default Index;
