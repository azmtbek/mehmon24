import CardReview from "./CardReview";
import React, { useState } from "react";

const Reviews = () => {
  const [srcn, setSrcn] = useState(0);
  const names = [
    "Gavhar Tojiyeva",
    "Qobilov Jasur",
    "Ergashev Farhod",
    "Rustamov Abror",
    "To’laganov Jamshid",
    "Abdurahimova Guli",
  ];
  const roles = [
    "SMM menejer",
    "O’qituvchi",
    "Talaba",
    "Quruvchi",
    "Injener",
    "Shifokor",
  ];
  const texts = [
    `Juda ham zo’r. Menga yoqdi. Ayniqsa bu platforma turistlarga ancha ma’qul kelishi turgan gap. qoyil!`,
    `Assalomu alaykum. Rahmat hammaga. Menga ushbu sayt juda ma’qul bo’ldi. Ajoyib imkoniyatlar mavjud. Ishilarga omad`,
    `Juda ham zo’r. Menga yoqdi.
     Ayniqsa bu platforma turistlarga 
     ancha ma’qul kelishi turgan gap. qoyil!`,
    `Assalomu alaykum. Rahmat hammaga. Menga ushbu sayt juda ma’qul bo’ldi. Ajoyib imkoniyatlar mavjud. Ishilarga omad`,
    `Juda ham zo’r. Menga yoqdi.
     Ayniqsa bu platforma turistlarga 
     ancha ma’qul kelishi turgan gap. qoyil!`,
    `Assalomu alaykum. Rahmat hammaga.  
    Menga ushbu sayt juda ma’qul bo’ldi.
    Ajoyib imkoniyatlar mavjud. Ishilarga omad`,
  ];
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
    <div className="reviews">
      <h3 className="about-title">Mijozlar biz haqimizda</h3>
      <div className="reviews-body">
        {" "}
        <img src="left-arrow2.svg" onClick={() => prev(srcn)} alt="" />
        <div className="reviews-body-center">
          <CardReview
            img={srcn * 2}
            author={names[srcn * 2]}
            role={roles[srcn * 2]}
            text={texts[srcn * 2]}
          />{" "}
          <CardReview
            img={srcn * 2 + 1}
            author={names[srcn * 2 + 1]}
            role={roles[srcn * 2 + 1]}
            text={texts[srcn * 2 + 1]}
          />
        </div>{" "}
        <img src="right-arrow2.svg" onClick={() => next(srcn)} alt="" />
      </div>
      <div className="reviews-down">
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
};

export default Reviews;
