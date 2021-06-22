import React, { useReducer, useState } from "react";
import { data } from "../../../data";
import Modal from "./Modal";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "TESTING")
    return { ...state, people: data, showModal: true, modalContent: "Added" };
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
      dispatch({ type: "TESTING" });
    }
  };

  return (
    <>
      {state.showModal && <Modal modalContent={state.modalContent} />}
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
          <div key={person.id}>
            <p>{person.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Index;
