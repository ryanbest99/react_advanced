import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  //
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Item Added",
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople2 = state.people.filter(function (person) {
      return person.id !== action.payload;
    });

    return {
      ...state,
      people: newPeople2,
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
  //   const [people, setPeople] = useState([]);
  //   const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    if (name && age) {
      const newPerson = { id: new Date().getTime().toString(), age, name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      // Make the inputs empty
      setName("");
      setAge("");
    } else {
      alert("No Values");
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
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {state.people.map(function (person) {
        const { id, name, age } = person;
        return (
          <div key={id} style={{ display: "flex" }}>
            <h3>"name: {name}" </h3>
            <h3>"Age: {age}"</h3>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
