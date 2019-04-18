import React from "react";
import PropTypes from "prop-types";
import Row from "../Row/Row";
import Coordinates from "../Coordinates/Coordinates";
import { PuzzleContext } from "../../containers/PuzzleProvider/PuzzleProvider";

const Grid = ({ children }) => {
  const filledRows = [];
  let shuffledPieces = children;

  return (
    <PuzzleContext.Consumer>
      {({ height }) => {
        shuffledPieces.forEach((row, rowIndex) => {
          const rowWithCoords = row.map((piece, colIndex) => {
            return (
              <Coordinates row={rowIndex} column={colIndex} key={colIndex}>
                {piece}
              </Coordinates>
            );
          });
          console.log(rowWithCoords);

          filledRows.push(
            <Row key={rowIndex} height={height}>
              {[...rowWithCoords]}
            </Row>
          );
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
