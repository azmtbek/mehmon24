import React from "react";

function Icon({ sm }) {
  return (
    <>
      <span className={`icon${sm || ""} logo`}></span>
    </>
  );
}

export default Icon;
