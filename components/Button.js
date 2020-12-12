import React from "react";

function Button({ size, text }) {
  return (
    <>
      <button className={`btn ${size || ""} `}>{text}</button>
    </>
  );
}

export default Button;
