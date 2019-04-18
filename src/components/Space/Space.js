import React from "react";

const Space = ({ index, width, height }) => (
  <div
    className="piece"
    index={index}
    style={{ width, height, backgroundColor: "black" }}
  />
);

export default Space;
