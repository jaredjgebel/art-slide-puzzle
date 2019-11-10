import React from "react";
import PropTypes from "prop-types";
import { PuzzleContext } from "../../containers/PuzzleProvider/PuzzleProvider";
import { GridContext } from "../../containers/GridProvider/GridProvider";
import compareMaps from "../../logic/compareMaps";

const Piece = ({ index, img, coords }) => (
  <PuzzleContext.Consumer>
    {({ width, height }) => {
      return (
        <GridContext.Consumer>
          {({ processMove, pieceMap, solutionMap, setPuzzleComplete }) => {
            return (
              <div
                className="piece"
                style={{ width, height }}
                index={index}
                onClick={() => {
                  processMove(pieceMap, coords, index);
                  if (compareMaps(solutionMap, pieceMap)) {
                    setPuzzleComplete(true);
                  }
                }}
              >
                <img src={img} />
              </div>
            );
          }}
        </GridContext.Consumer>
      );
    }}
  </PuzzleContext.Consumer>
);

export default Piece;

Piece.propTypes = {
  index: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number)
};
