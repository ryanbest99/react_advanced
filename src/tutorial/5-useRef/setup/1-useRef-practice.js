import React, { useEffect, useRef } from "react";

function UseRefPractice() {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(refContainer.current);
    console.log(refContainer.current.value);
    console.log(e.target);
    console.log(divContainer.current);
    console.log(divContainer.current.value);
  };

  console.log(refContainer);

  const callBack = () => {
    console.log("rerendered");
    console.log(refContainer.current);
    refContainer.current.focus();
  };

  useEffect(callBack);

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>hi</div>
    </article>
  );
}

export default UseRefPractice;
