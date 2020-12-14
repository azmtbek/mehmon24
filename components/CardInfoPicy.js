import CardInfo from "./CardInfo";
const CardInfoPicy = ({ left }) => {
  return (
    <div className={`info-picy ${left ? "ip-left" : ""}`}>
      <div className="ip-images">
        <img src="images/cardinfoimg.jpg" alt="" />
      </div>
      <div className={`ip-info${left ? "-left" : ""}`}>
        <CardInfo />
      </div>
    </div>
  );
};

export default CardInfoPicy;
