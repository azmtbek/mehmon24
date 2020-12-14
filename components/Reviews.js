import CardReview from "./CardReview";

const Reviews = () => {
  return (
    <div className="reviews">
      <h3 className="about-title">Mijozlar haqimizda</h3>
      <div className="reviews-body">
        {" "}
        <img src="left-arrow2.svg" onClick="" alt="" />
        <div className="reviews-body-center">
          <CardReview /> <CardReview />
        </div>{" "}
        <img src="right-arrow2.svg" onClick="" alt="" />
      </div>
      <div className="reviews-down">
        <img
          src="reg-line.svg"
          alt=""
          //   className={srcn === 0 ? "active" : ""}
          //   onClick={() => setSrcn(0)}
        />{" "}
        <img
          src="reg-line.svg"
          alt=""
          //   className={srcn === 1 ? "active" : ""}
          //   onClick={() => setSrcn(1)}
        />{" "}
        <img
          src="reg-line.svg"
          alt=""
          //   className={srcn === 2 ? "active" : ""}
          //   onClick={() => setSrcn(2)}
        />
      </div>
    </div>
  );
};

export default Reviews;
