import React from "react";
import PropTypes from "prop-types";
import Row from "../Row/Row";
import Coordinates from "../Coordinates/Coordinates";
import { PuzzleContext } from "../../containers/PuzzleProvider/PuzzleProvider";
import { GridContext } from "../../containers/GridProvider/GridProvider";

const Grid = () => {
  return (
    <GridContext.Consumer>
      {({ Pieces }) => {
        const filledRows = [];

        return (
          <PuzzleContext.Consumer>
            {({ height }) => {
              Pieces.forEach((row, rowIndex) => {
                const rowWithCoords = row.map((piece, colIndex) => {
                  return (
                    <Coordinates
                      row={rowIndex}
                      column={colIndex}
                      key={colIndex}
                    >
                      {piece}
                    </Coordinates>
                  );
                });

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
      }}
    </GridContext.Consumer>
  );
};

export default Grid;
