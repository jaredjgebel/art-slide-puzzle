import React, { Component } from "react";
import isValidMove from "../../logic/isValidMove";
import {
  importOliveTrees,
  importMaineCoast,
  importWindflowers
} from "../../logic/import-images";
import generatePieces from "../../logic/generatePieces";
import compareMaps from "../../logic/compareMaps";
import processNewMove from "../../logic/processNewMove";
import shuffle2DArray from "../../logic/shuffle2DArray";
import generate2DArray from "../../logic/generate2DArray";

export const PuzzleContext = React.createContext();

class PuzzleProvider extends Component {
  constructor(props) {
    super(props);

    const images =
      props.puzzle.title === "Olive Trees"
        ? importOliveTrees()
        : props.puzzle.title === "Maine Coast"
        ? importMaineCoast()
        : importWindflowers();

    const solutionMap = generate2DArray(
      props.puzzle.rowCount,
      props.puzzle.columnCount
    );

    this.state = props.puzzle
      ? {
          title: props.puzzle.title,
          artist: props.puzzle.artist,
          year: props.puzzle.year,
          height: parseInt(props.puzzle.pieceHeight),
          width: parseInt(props.puzzle.pieceWidth),
          rows: parseInt(props.puzzle.rowCount),
          columns: parseInt(props.puzzle.columnCount),
          solutionMap,
          images
        }
      : {};
  }

  render() {
    return (
      <PuzzleContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </PuzzleContext.Provider>
    );
  }
}

export default PuzzleProvider;
