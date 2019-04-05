import React from "react";
import PropTypes from "prop-types";

const Piece = ({ index, img, width = "85px", height = "84px" }) => (
  <div className="piece" style={{ width, height }} index={index}>
    <img src={img} />
  </div>
);

export default Piece;

Piece.propTypes = {
  index: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
