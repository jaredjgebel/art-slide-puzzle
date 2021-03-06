import React from "react";
import PropTypes from "prop-types";

const Coordinates = ({ row, column, children }) => {
  const childrenWithProps = [children].map(child => {
    return React.cloneElement(child, {
      coords: [row, column]
    });
  });

  return childrenWithProps;
};

export default Coordinates;

Coordinates.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
