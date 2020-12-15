import React from "react";
import Icon from "./Icon";
import HeaderLink from "./HeaderLink";
import Button from "./Button";
import Locale from "./Locale";
import { useRouter } from "next/router";
import Link from "next/link";
function Header() {
  let router = useRouter();
  return (
    <div className="header">
      <Icon sm="-sm" />
      <div className="header-links">
        <HeaderLink
          text="Asosiy qism"
          link="/"
          active={router.pathname === "/" ? "active" : ""}
        />
        <HeaderLink
          text="Mehmonxonalar"
          link="/hotel"
          active={
            router.pathname === "/hotel" ||
            router.pathname === "/motel" ||
            router.pathname === "/hostel"
              ? "active"
              : ""
          }
        />
        <HeaderLink
          text="Restoranlar"
          link="/restaurant"
          active={router.pathname === "/restaurant" ? "active" : ""}
        />
        <HeaderLink
          text="Turistik joylar"
          link="/tourism"
          active={router.pathname === "/tourism" ? "active" : ""}
        />
        <HeaderLink
          text="Transport"
          link="/transport"
          active={router.pathname === "/transport" ? "active" : ""}
        />
      </div>
      <Locale />
      <div className="header-btn">
        <Link href="/register" as="/">
          <a>
            <Button size="btn-sm" text="Ro'yxatdan o'tish" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
