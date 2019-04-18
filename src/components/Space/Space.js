import React from "react";
import PropTypes from "prop-types";

const Space = ({ index, width, height, coords }) => (
  <div
    className="piece"
    index={index}
    style={{ width, height, backgroundColor: "black" }}
  />
);

export default Space;

Space.propTypes = {
  index: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number)
};
