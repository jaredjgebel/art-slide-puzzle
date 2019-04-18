import React from "react";
import PropTypes from "prop-types";
import flatten from "lodash.flatten";
import { importAll } from "../../logic/import-images";

const Select = ({ onSelect }) => {
  const images = importAll(
    require.context("../../images/optimized", false, /\.(png|jpe?g|svg)$/)
  );

  const titles = flatten(Object.keys(images).map(key => /[^.]*/.exec(key)));

  return (
    <div
      className="select"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {Object.keys(images).map((key, index) => (
        <img
          src={images[key]}
          key={index}
          data-title={titles[index]}
          style={{ maxWidth: "300px", maxHeight: "500px", margin: "25px 25px" }}
          onClick={() => onSelect(titles[index])}
        />
      ))}
    </div>
  );
};

export default Select;

Select.propTypes = {
  onSelect: PropTypes.func.isRequired
};
