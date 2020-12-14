import React, { useState } from "react";

function Carousel({ children }) {
  const [srcn, setSrcn] = useState(0);
  const next = (val) => {
    let newVal = (val + 1) % 3;
    setSrcn(newVal);
  };
  const prev = (val) => {
    let newVal = (val + 2) % 3;
    setSrcn(newVal);
  };
  const set = (val) => {
    let newVal = (val + 4) % 3;
    setSrcn(newVal);
  };

  return (
    <div className="carousel">
      <div className="carousel-img">
        <img src={`images/carousel${srcn}.jpg`} alt="" />
      </div>
      <div className="carousel-center">
        <img src="left-arrow.svg" onClick={() => prev(srcn)} alt="" />
        <div className="carousel-center-text">{children}</div>
        <img src="right-arrow.svg" onClick={() => next(srcn)} alt="" />
      </div>
      <div className="carousel-down">
        <img
          src="reg-line.svg"
          alt=""
          className={srcn === 0 ? "active" : ""}
          onClick={() => setSrcn(0)}
        />{" "}
        <img
          src="reg-line.svg"
          alt=""
          className={srcn === 1 ? "active" : ""}
          onClick={() => setSrcn(1)}
        />{" "}
        <img
          src="reg-line.svg"
          alt=""
          className={srcn === 2 ? "active" : ""}
          onClick={() => setSrcn(2)}
        />
      </div>
    </div>
  );
}

export default Carousel;
