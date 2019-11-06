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
      style={{ textAlign: "center", backgroundColor: "beige", height: "100vh" }}
    >
      <h1
        style={{
          marginTop: "0px",
          paddingTop: "25px"
        }}
      >
        Art Slide Puzzles
      </h1>
      <h2>Select your puzzle</h2>

      <div
        className="select"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {Object.keys(images).map((key, index) => (
          <img
            src={images[key]}
            key={index}
            data-title={titles[index]}
            style={{
              maxHeight: "250px",
              margin: "25px 25px"
            }}
            onClick={() => onSelect(titles[index])}
          />
        ))}
      </div>
    </div>
  );
};

export default Select;

Select.propTypes = {
  onSelect: PropTypes.func.isRequired
};
