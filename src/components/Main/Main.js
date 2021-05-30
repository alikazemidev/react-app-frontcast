import React from "react";

const Main = (props) => {
  const btn = {
    backgroundColor: "#7b1fa2",
    color: "#fff",
    font: "inherit",
    border: "none",
    outline: "none",
    borderRadius: "3px",
    padding: ".6rem",
    margin: ".6rem auto",
  };
  return (
    <div>
      <h1>Book store</h1>
      <button style={btn} onClick={props.click}>
        show/hide products
      </button>
    </div>
  );
};

export default Main;
