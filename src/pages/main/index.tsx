import React from "react";

import "./main.scss";
import Sidebar from "./side";
import FlexHV from "layouts/FlexHV";

const Main = () => {
  return (
    <div className="main-container">
      <FlexHV>
      <Sidebar />
      <div> Kaboom </div>
      </FlexHV>
    </div>
  );
};

export default Main;
