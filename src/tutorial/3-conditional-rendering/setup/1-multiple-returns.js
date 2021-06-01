import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  console.log(isLoading);

  const callBack = () => {
    console.log("Rendered callBack");
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        const { login } = data;
        console.log(login);
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(callBack, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
