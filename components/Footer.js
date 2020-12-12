import Button from "./Button";
import Icon from "./Icon";
function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Icon sm="-sm" />
        <div className="member-sm">
          <img src="tg.png" alt="" />
          <img src="ig.png" alt="" />
          <img src="fb.png" alt="" />
        </div>
      </div>
      <div className="footer-menu">
        <div className="fm-title">Menu</div>
        <div className="fm-link">Asosiy qism</div>
        <div className="fm-link">Mehmonxonalar</div>
        <div className="fm-link">Restoranlar</div>
        <div className="fm-link">Turistik joylar</div>
        <div className="fm-link">Transport</div>
      </div>
      <div className="footer-menu">
        <div className="fm-title">Biz haqimizda</div>
        <div className="fm-link">Mijozlar biz haqimizda</div>
        <div className="fm-link">Bizning jamoa</div>
        <div className="fm-link">Kontakt</div>
      </div>
      <div className="footer-menu">
        <div className="fm-title">Biz jaqimizda</div>
        <div className="fm-link">
          {" "}
          <img src="call.png" alt="" /> +998 97 777-77-77
        </div>
      </div>
      <div className="footer-register">
        <Button text="Ro'yxatdan o'tish" size="btn-sm" />
      </div>

      <div className="footer-rights">All right reserved.Mehmon24.uz</div>
    </footer>
  );
}

export default Footer;
