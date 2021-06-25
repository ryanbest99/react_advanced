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
      <h1>{modalContent}</h1>
    </div>
  );
}

export default Modal;
