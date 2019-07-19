import React, { Component } from "react";
import Grid from "../Grid/Grid";
import { PuzzleContext } from "../../containers/PuzzleProvider/PuzzleProvider";
import GridProvider from "../../containers/GridProvider/GridProvider";
import "./Puzzle.css";

class Puzzle extends Component {
  render() {
    return (
      <PuzzleContext.Consumer>
        {({ rows, columns, images, height, width, solutionMap }) => {
          return (
            <GridProvider
              rows={rows}
              columns={columns}
              images={images}
              height={height}
              width={width}
            >
              <Grid />
            </GridProvider>
          );
        }}
      </PuzzleContext.Consumer>
    );
  }
}

export default Puzzle;
