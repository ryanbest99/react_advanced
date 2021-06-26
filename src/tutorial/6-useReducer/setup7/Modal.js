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
      <h4>Status: {modalContent}</h4>
    </div>
  );
}

export default Modal;
