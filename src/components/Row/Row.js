import React from "react";
import PropTypes from "prop-types";

const Row = props => (
  <div className="row" style={{ height: props.height, display: "flex" }}>
    {props.children}
  </div>
);

export default Row;

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};
