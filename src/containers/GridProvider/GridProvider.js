import React, { Component } from "react";
import PropTypes from "prop-types";
import isValidMove from "../../logic/isValidMove";
import compareMaps from "../../logic/compareMaps";
import processNewMove from "../../logic/processNewMove";
import generate2DArray from "../../logic/generate2DArray";
import shuffle2DArray from "../../logic/shuffle2DArray";
import generatePieces from "../../logic/generatePieces";

export const GridContext = React.createContext();

const getSpaceCoords = (intArray, spaceIndex) => {
  let spaceRow, spaceCol;

  intArray.forEach((row, rowCoord) => {
    row.forEach((col, colCoord) => {
      if (row[col] === spaceIndex) {
        spaceRow = rowCoord;
        spaceCol = colCoord;
      }
    });
  });

  return [spaceRow, spaceCol];
};

class GridProvider extends Component {
  constructor(props) {
    super(props);

    const solutionMap = generate2DArray(props.rows, props.columns);

    const pieceMap = shuffle2DArray(solutionMap);
    const Pieces = generatePieces(
      pieceMap,
      props.images,
      props.width,
      props.height
    );

    this.state = {
      spaceIndex: parseInt(props.rows) * parseInt(props.columns),
      spaceCoordinates: [props.rows - 1, props.columns - 1],
      solutionMap: props.solutionMap,
      pieceMap: pieceMap,
      Pieces
    };
  }

  processMove = (pieceMap, pieceCoords, pieceIndex) => {
    if (isValidMove(pieceCoords, this.state.spaceIndex, this.state.pieceMap)) {
      const newMap = processNewMove(
        pieceMap,
        pieceIndex,
        this.state.spaceIndex
      );

      const spaceCoords = getSpaceCoords(newMap, this.state.spaceIndex);

      const newPieces = generatePieces(
        newMap,
        this.props.images,
        this.props.width,
        this.props.height
      );

      this.setState({
        ...this.state,
        pieceMap: newMap,
        Pieces: newPieces,
        spaceCoordinates: spaceCoords
      });
    }
  };

  render() {
    const { processMove } = this;
    return (
      <GridContext.Provider
        value={{
          ...this.state,
          processMove
        }}
      >
        {this.props.children}
      </GridContext.Provider>
    );
  }
}

export default GridProvider;

GridProvider.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired
};
