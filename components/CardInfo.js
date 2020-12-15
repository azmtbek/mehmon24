import Button from "./Button";
import Link from "next/link";

function CardInfo() {
  return (
    <div className="card-info">
      <div className="ci-title">
        <div className="ci-title-name">Naming</div>
        <div className="ci-title-rate">
          {" "}
          <img src="stars.png" alt="" />
        </div>
      </div>
      <div className="ci-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
        odit praesentium accusantium minus nobis ut sequi a iusto perferendis
        animi corrupti, aspernatur minima voluptatibus pariatur nam soluta
        eligendi ex!
      </div>
      <div className="ci-map">
        Xarita <img src="ci-right-arrow.png" alt="" />
      </div>
      <div className="ci-phone">
        {" "}
        <img src="call.png" alt="" /> +998 97 777-77-77
      </div>
      <div className="ci-address">
        <img src="pin.png" alt="" /> Toshkent, Yunusobod, 4-mavze
      </div>
      <div className="ci-site">
        <img src="globe.png" alt="" /> www.mehmon24.uz
      </div>
      <div className="ci-btn">
        <Link href="booking" as="booking">
          <a>
            <Button size="btn-sm" text="Buyurtma berish" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default CardInfo;
