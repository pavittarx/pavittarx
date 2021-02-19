import React, { ReactChild } from "react";

import "./styles.scss";

type FlexHVProps = {
  children: Array<ReactChild>
}

const FlexHV = ({ children }: FlexHVProps) => {
  return (
    <section className="flex-container">
      {children.length === 2 ? (
        <>
          <div className="left-container">{children[0]}</div>
          <div className="right-container">{children[1]}</div>
        </>
      ) : <div> FlexHV supports only 2 root level elements. </div>}
    </section>
  );
};

export default FlexHV;
