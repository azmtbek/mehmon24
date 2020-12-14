function CardReview({ img, author, role, text }) {
  return (
    <div className="card-review">
      <img src={`images/reviewer${img}.png`} alt="" />
      <div className="card-review-body">
        <div className="crb-author">{author}</div>
        <div className="crb-role">{role}</div>
        <div className="crb-text">{text}</div>
      </div>
      <img src="quo.png" alt="" className="cr-decor" />
    </div>
  );
}

export default CardReview;
