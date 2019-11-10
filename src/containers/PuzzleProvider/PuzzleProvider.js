import React, { Component } from "react";
import {
  importOliveTrees,
  importMaineCoast,
  importWindflowers
} from "../../logic/import-images";
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

    this.state = props.puzzle
      ? {
          title: props.puzzle.title,
          artist: props.puzzle.artist,
          year: props.puzzle.year,
          height: parseInt(props.puzzle.pieceHeight),
          width: parseInt(props.puzzle.pieceWidth),
          rows: parseInt(props.puzzle.rowCount),
          columns: parseInt(props.puzzle.columnCount),
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
