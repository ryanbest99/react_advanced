import React, { useState, useEffect } from "react";

function Review() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  const callBack = () => {
    console.log("render");

    const handleSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  };

  useEffect(callBack);

  return (
    <div>
      <h1>Review Width</h1>
      <h2>{width}</h2>
    </div>
  );
}

export default Review;

// // UseEffect Review with fetch api
// import React, { useState, useEffect } from "react";

// function Review() {
//   const [number, setNumber] = useState("posts");
//   const [items, setItems] = useState([]);

//   const numOne = () => {
//     setNumber("posts");
//   };
//   const numTwo = () => {
//     setNumber("users");
//   };
//   const numThree = () => {
//     setNumber("comments");
//   };

//   console.log("render");

//   const callBack = () => {
//     console.log("callBack");
//     fetch(`https://jsonplaceholder.typicode.com/${number}`)
//       .then((response) => response.json())
//       .then(function (json) {
//         console.log(json);
//         setItems(json);
//       });
//     //   .then((json) => console.log(json));
//   };

//   useEffect(callBack, [number]);

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button className="btn" onClick={numOne}>
//         posts
//       </button>
//       <button className="btn" onClick={numTwo}>
//         users
//       </button>
//       <button className="btn" onClick={numThree}>
//         comments
//       </button>

//       {items.map(function (item) {
//         console.log(item);
//         return (
//           <div key={item.id}>
//             <pre>{JSON.stringify(item)}</pre>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Review;

// import React, { useState } from "react";

// function Review() {
//   const [number, setNumber] = useState(0);

//   console.log(number);

//   const decrement = () => {
//     console.log("decrement");

//     const callBack = () => {
//       console.log("setTimeout");
//       setNumber(number - 1);
//       //   setNumber((prevNum) => prevNum - 1);
//     };

//     setTimeout(callBack, 1000);
//   };

//   const reset = () => {
//     console.log("reset");
//   };
//   const increment = () => {
//     console.log("increment");
//   };
//   return (
//     <div>
//       <h1>Review</h1>
//       <h2>{number}</h2>

//       <button className="btn" onClick={decrement}>
//         -
//       </button>
//       <button className="btn" onClick={reset}>
//         Reset
//       </button>
//       <button className="btn" onClick={increment}>
//         +
//       </button>
//     </div>
//   );
// }

// export default Review;
