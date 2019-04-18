import React from "react";
import PropTypes from "prop-types";
import Row from "../Row/Row";
import { PuzzleContext } from "../../containers/PuzzleProvider/PuzzleProvider";

const Grid = ({ children }) => {
  const filledRows = [];
  let shuffledPieces = children;

  return (
    <PuzzleContext.Consumer>
      {({ rows, columns, width, height }) => {
        shuffledPieces.forEach((row, index) => {
          filledRows.push(<Row key={index}>{[...row]}</Row>);
        });

        return filledRows;
      }}
    </PuzzleContext.Consumer>
  );
};

export default Grid;

Grid.propTypes = {
  children: PropTypes.array.isRequired
};
