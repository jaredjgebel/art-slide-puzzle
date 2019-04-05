import React from "react";

const Piece = ({ index, img, width = "85px", height = "84px" }) => (
  <div className="piece" style={{ width, height }} index={index}>
    <img src={img} />
  </div>
);

export default Piece;
