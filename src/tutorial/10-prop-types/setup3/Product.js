import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt="" />
      <h5>{name || "default name"}</h5>
      <h5>${price || 3.99}</h5>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   image: defaultImage,
//   price: 4.99,
//   name: "default name",
// };

export default Product;
