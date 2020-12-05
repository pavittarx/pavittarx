import React, { useState } from "react";

import { IMenuOpen, IMenuClose, IMail, IBox } from "~/shared/icons";
import { Button } from "~/shared/buttons";

import { HomeWrapper, HeaderStyles, MainStyles } from "./home.styles";

import logo from "~/assets/images/pavittarx.svg";
import illustration from "~/assets/images/illustration.svg";
import attachIcon from "~/assets/icons/attach.svg";

const Main: React.FC = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("pavittarx@gmail.com");

    alert("Email: pavittarx@gmail.com has been copied to your clipboard.");
  };

  return (
    <MainStyles backgroundImage={illustration}>
      <header id="header">Pavittar Singh</header>
      <main id="main">
        <div className="para description">
          Fullstack developer building websites in React & Javascript.
        </div>
        <div className="para links">
          <div onClick={copyEmail} id="email">
            <IMail />
            <span> pavittarx@gmail.com </span>
          </div>
          <div id="form">
            <IBox />
            <span> Get in touch</span>
          </div>
        </div>
        <Button icon={attachIcon} text="Resume" />
      </main>
    </MainStyles>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderStyles>
      <div className="logo">
        <img src={logo} alt="logo_icon" />
      </div>
      <div onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? <IMenuOpen width="28" /> : <IMenuClose />}
      </div>
    </HeaderStyles>
  );
};

const Home: React.FC<{}> = () => {
  return (
    <HomeWrapper backgroundImage={illustration}>
      <Header />
      <Main />
    </HomeWrapper>
  );
};

export default Home;