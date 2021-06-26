import React, { useEffect, useState } from "react";
import useFetch from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

function FetchExample() {
  const { loading, products } = useFetch(url);

  return (
    <div>
      <h2>{loading ? "loading... " : "data"}</h2>
    </div>
  );
}

export default FetchExample;
