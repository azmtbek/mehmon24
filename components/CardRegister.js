import Icon from "./Icon";
import Link from "next/link";
const CardRegister = () => {
  return (
    <div className="card-register">
      <div className="cr-darky"></div>
      <Link href="/" as="/">
        <a className="arrow-back">
          <img src="arrow-back.png" alt="" />
        </a>
      </Link>
      <div className="cr-body">
        <Icon />
        <h3>O’zingizga ma’qul bo’lgan xonani band qiling</h3>
      </div>
    </div>
  );
};

export default CardRegister;
