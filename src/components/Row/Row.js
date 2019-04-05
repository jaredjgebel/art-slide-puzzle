import React from "react";

const Row = props => (
  <div className="row" style={{ height: "97px", display: "flex" }}>
    {props.children}
  </div>
);

export default Row;
