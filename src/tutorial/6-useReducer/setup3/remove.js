import React, { useReducer, useState } from "react";
import { data } from "../../../data";
import Modal from "./Modal";

const reducer = (state, action) => {
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
    return {
      ...state,
      showModal: true,
      modalContent: "No_VALUE",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
    };
  }
};

const defaultState = {
  people: [],
  showModal: false,
  modalContent: "",
};

function Index() {
  //   const [showModal, setShowModal] = useState(false);
  //   const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
      setTimeout(() => {
        state.showModal = false;
      }, 1500);
      //       setShowModal(true);
      //       setName("");
      //       setTimeout(() => {
      //         setShowModal(false);
      //       }, 1500);
      //       setPeople([
      //         ...people,
      //         { id: new Date().getTime().toString(), name: name },
      //       ]);
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  //   const deleteItem = (person) => {
  //     console.log("deleted");
  //     dispatch({ type: "DELETE_ITEM", payload: person.id });
  //   };

  return (
    <>
      {/* {showModal && <Modal />} */}
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <h1>Index</h1>
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
          <div key={person.id} className="item">
            <p>{person.name}</p>
            {/* <button onClick={deleteItem(person)}>delete</button> */}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
