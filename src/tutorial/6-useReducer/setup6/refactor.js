import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  //
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //     if (name) {
    //       setName("");
    //       setShowModal(true);
    //       const newPerson = { id: new Date().getTime().toString(), name: name };
    //       setPeople([...people, newPerson]);

    //       setTimeout(() => {
    //         setShowModal(false);
    //       }, 1000);
    //     }
  };

  //   const removeItem = (id) => {
  //     const newPeople = people.filter(function (person) {
  //       return person.id !== id;
  //     });

  //     setPeople(newPeople);
  //   };

  return (
    <>
      {/* {showModal && <Modal />} */}
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
      {/* {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })} */}
    </>
  );
}

export default Index;
