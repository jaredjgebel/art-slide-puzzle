import React from "react";

const Space = ({ index, width = "85px", height = "84px" }) => (
  <div
    className="piece"
    index={index}
    style={{ width, height, backgroundColor: "black" }}
  />
);

export default Space;
