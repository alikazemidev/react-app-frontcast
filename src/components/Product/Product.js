import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <p onClick={props.click}>product name : {props.title} </p>
      <p>product name : {props.price} </p>
      <input type="text" onChange={props.change} value={props.title} />
    </div>
  );
};

export default Product;
