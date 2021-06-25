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

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(function (person) {
      return person.id !== action.payload;
    });

    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Item Deleted",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
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
      setName("");
    } else {
      dispatch({ type: "NO_ITEM" });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
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
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
