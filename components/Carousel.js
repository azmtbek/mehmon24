function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-img"></div>
      <div className="carousel-center">
        <img src="left-arrow.svg" alt="" />
        <div className="carousel-center-text">
          <div className="text-title">Assalomu alaykum!</div>
          <div className="text-body">
            Mehmon24.uz loyihasining rasmiy web-saytiga xush kelibsiz!
          </div>
        </div>
        <img src="right-arrow.svg" alt="" />
      </div>
      <div className="carousel-down">
        <img src="reg-line.svg" alt="" /> <img src="reg-line.svg" alt="" />{" "}
        <img src="reg-line.svg" alt="" />
      </div>
    </div>
  );
}

export default Carousel;
