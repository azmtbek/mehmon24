function CardMember({ img, name, role, socials }) {
  return (
    <div className="card-member">
      <img src={`images/member${img}.png`} alt="" className="member-img" />
      <div className="member-title">{name}</div>
      <div className="member-role">{role}</div>
      <div className="member-sm">
        <img src="tg.png" alt="" />
        <img src="ig.png" alt="" />
        <img src="fb.png" alt="" />
      </div>
    </div>
  );
}

export default CardMember;
