import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/react-prop-types-example";

function Index() {
  const { products } = useFetch(url);
  return (
    <div>
      <h1>Index</h1>
      <section className="products">
        {products.map(function (product) {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
}

export default Index;
