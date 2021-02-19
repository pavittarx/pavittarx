import React, { useState } from "react";
import Header from "components/header";
import Button from "components/button";
import TextInput from "components/input";
import PlaceholderImage from "assets/images/profile-placeholder.jpg";

import "./main.scss";

const SidebarContent = () => {
  return (
    <section className="sidebar-content-container">
      <Info />
      <Update />
      <NewsLetter />
    </section>
  );
};

const Update = () => {
  return (
    <div className="update-container">
      <div className="heading gradient-text">Update: 2021</div>
      <div className="content">
        I am currently available for freelance web design and development
        projects.
      </div>
      <Button>
        <div className="gradient-text button-text">Let's get in touch!</div>
      </Button>
    </div>
  );
};

const Info = () => {
  return (
    <div className="info-container">
      <div className="profile-image">
        <img src={PlaceholderImage} alt="@pavittarx" />
      </div>
      <div className="headline-short">Hello! I am Pavittar Singh.</div>
      <div className="headline-large">I build websites and apps.</div>
    </div>
  );
};

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="newsletter-container">
      <div className="heading"> Subscribe to my newsletter</div>
      <div className="input-form">
        <TextInput
          placeholder="Your Email @"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="button-wrapper">
        <Button>
          <div className="gradient-text button-text">
            Join
          </div>
        </Button>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <section id="sidebar" className="sidebar-container">
      <Header />
      <SidebarContent />
    </section>
  );
};

export default Sidebar;
