import React, { ReactChild } from "react";

import "./button.scss";

type ButtonProps = {
  children: ReactChild;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="button-container">
      <div className="button-wrapper">{children}</div>
    </div>
  );
};

export default Button;
