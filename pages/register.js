import LayoutRegister from "../components/LayoutRegister";
import Button from "../components/Button";
import Input from "../components/Input";
import Icon from "../components/Icon";
import TextRegister from "../components/TextRegister";
import Link from "next/link";
function register() {
  return (
    <LayoutRegister>
      <Link href="/" as="/">
        <a className="arrow-back">
          <img src="arrow-back.png" alt="" />
        </a>
      </Link>
      <div className="minicontainer">
        <Icon />
        <TextRegister />
        <Input placeholder="E-mail" />
        <Input placeholder="Parol" />
        <Input placeholder="Nomer" />
        <Input placeholder="Firma guvohnomasi" />
        <Button />
      </div>
    </LayoutRegister>
  );
}

export default register;
