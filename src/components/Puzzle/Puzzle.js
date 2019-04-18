import React, { Component } from "react";
import Grid from "../Grid/Grid";

import { PuzzleContext } from "../../containers/PuzzleProvider/PuzzleProvider";
import { importOliveTrees, importMaineCoast } from "../../logic/import-images";
import {
  generate2DArray,
  shuffle2DArray,
  generatePieces,
  processMove
} from "../../logic/grid-methods";

class Puzzle extends Component {
  render() {
    return (
      <PuzzleContext.Consumer>
        {({ title, rows, columns, height, width }) => {
          const images =
            title === "Olive Trees" ? importOliveTrees() : importMaineCoast();

          const solutionMap = generate2DArray(rows, columns);

          const Pieces = generatePieces(solutionMap, images, width, height);

          const shuffledPieces = shuffle2DArray(Pieces);

          return <Grid className="grid">{shuffledPieces}</Grid>;
        }}
      </PuzzleContext.Consumer>
    );
  }
}

export default Puzzle;
