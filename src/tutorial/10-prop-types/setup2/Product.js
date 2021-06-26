import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  console.log(image);

  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt="" />
      <h5>{name}</h5>
      <h5>{price || 3.99}</h5>
      {/* <img src={image.url} alt="" srcset="" /> */}
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
