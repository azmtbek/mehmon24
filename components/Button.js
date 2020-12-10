import React from "react";

function Button({ size }) {
  return (
    <>
      <button className={`btn ${size || ""} `}>Ro'yxatdan o'tish</button>
    </>
  );
}

export default Button;
