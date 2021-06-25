import React, { useState, useEffect } from "react";
// import { useFetch } from "./2-useFetch";
import useFetch from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);

  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      {/* {products.map(function (product) {
        return (
          <div key={product.id}>
            <p>{product.fields.company}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Example;
