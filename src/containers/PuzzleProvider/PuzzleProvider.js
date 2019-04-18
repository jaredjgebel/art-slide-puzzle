import React, { Component } from "react";

export const PuzzleContext = React.createContext();

class PuzzleProvider extends Component {
  constructor(props) {
    super(props);

    this.state = props.puzzle
      ? {
          title: props.puzzle.title,
          artist: props.puzzle.artist,
          year: props.puzzle.year,
          height: props.puzzle.pieceHeight,
          width: props.puzzle.pieceWidth,
          rows: props.puzzle.rowCount,
          columns: props.puzzle.columnCount
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
