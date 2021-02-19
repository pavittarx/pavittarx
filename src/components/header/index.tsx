import React from "react";
import "./header.scss";

import { ReactComponent as LogoIcon } from "assets/icons/@pavittarx-48.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";

const Header = () => {
  return (
    <section className="header-container">
      <div className="header-bar">
        <LogoIcon />
        <MenuIcon />
      </div>
    </section>
  );
};

export default Header;
