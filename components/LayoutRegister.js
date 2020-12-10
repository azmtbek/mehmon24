import React from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import Icon from "../components/Icon";
import TextRegister from "../components/TextRegister";
function LayoutRegister({ props }) {
  return (
    <div className="layout-register">
      <div className="minicontainer">
        <Icon />
        <TextRegister />
        <Input placeholder="E-mail" />
        <Input placeholder="Parol" />
        <Input placeholder="Nomer" />
        <Input placeholder="Firma guvohnomasi" />
        <Button />
      </div>
    </div>
  );
}

export default LayoutRegister;
