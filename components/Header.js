import React from "react";
import Icon from "./Icon";
import HeaderLink from "./HeaderLink";
import Button from "./Button";
import Locale from "./Locale";
function Header() {
  return (
    <div className="header">
      <Icon sm="-sm" />
      <div className="header-links">
        <HeaderLink text="Asosiy qism" />
        <HeaderLink text="Mehmonxonalar" />
        <HeaderLink text="Restoranlar" />
        <HeaderLink text="Turistik joylar" />
        <HeaderLink text="Transport" />
      </div>
      <Locale />
      <div className="header-btn">
        <Button size="btn-sm" text="Ro'yxatdan o'tish" />
      </div>
    </div>
  );
}

export default Header;
