import React from "react";

const Row = props => (
  <div className="row" style={{ height: "84px", display: "flex" }}>
    {props.children}
  </div>
);

export default Row;
