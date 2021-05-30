import React from "react";
import Product from "../Product/Product";

const ProductList = (props) => {
  return props.products.map((item, index) => {
    return (
      <Product
        title={item.title}
        price={item.price}
        click={() => props.click(index)}
        key={item.id}
        change={(event) => props.change(event, item.id)}
      />
    );
  });
};

export default ProductList;
