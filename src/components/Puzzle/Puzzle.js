import React, { Component } from "react";
import flatten from "lodash.flatten";
import Grid from "../Grid/Grid";
import Piece from "../Piece/Piece";
import Space from "../Space/Space";
import { PuzzleContext } from "../../containers/PuzzleProvider/PuzzleProvider";
import { importOliveTrees, importMaineCoast } from "../../logic/import-images";
import {
  generate2DArray,
  shuffle2DArray,
  processMove,
  compareMaps
} from "../../logic/grid-methods";

export const generatePieces = (int2dArray, images, width, height) => {
  const imageKeys = Object.keys(images);
  const ints = flatten(int2dArray);

  const mappedPieces = [];

  int2dArray.forEach(row => {
    const mappedRow = row.map((int, index) =>
      int === ints.length ? (
        <Space index={int} key={int} width={width} height={height} />
      ) : (
        <Piece
          index={int}
          img={images[imageKeys[int - 1]]}
          key={int}
          width={width}
          height={height}
        />
      )
    );

    mappedPieces.push(mappedRow);
  });

  return mappedPieces;
};

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
