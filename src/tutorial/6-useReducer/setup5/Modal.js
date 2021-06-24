import React, { useEffect } from "react";

function Modal({ closeModal, modalContent }) {
  const callBack = () => {
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  useEffect(callBack, []);

  return (
    <div>
      <h1>status: </h1>
      <h2>{modalContent}</h2>
    </div>
  );
}

export default Modal;
