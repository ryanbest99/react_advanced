import React, { useEffect } from "react";

function Modal({ modalContent, closeModal }) {
  const callBack = () => {
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  useEffect(callBack, []);

  return (
    <div>
      <p>{modalContent}</p>
    </div>
  );
}

export default Modal;
