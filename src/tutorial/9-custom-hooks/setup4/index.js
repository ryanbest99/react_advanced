import React, { useState, useEffect } from "react";
import { useFetch } from "./fetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Index = () => {
  //
  const { loading, products } = useFetch(url);
  //
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Index;
