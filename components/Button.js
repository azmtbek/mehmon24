import React from "react";

function Button({ size, text, color }) {
  return (
    <>
      <button className={`btn ${size || ""}  ${color || ""} `}>{text}</button>
    </>
  );
}

export default Button;
