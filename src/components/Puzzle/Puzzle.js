import React, { Component } from "react";
import flatten from "lodash.flatten";
import importAll from "../../logic/import-images";
import Grid from "../Grid/Grid";
import Piece from "../Piece/Piece";
import {
  generate2DArray,
  shuffle2DArray,
  processMove,
  compareMaps
} from "../../logic/grid-methods";

export const generatePieces = (int2dArray, images) => {
  const imageKeys = Object.keys(images);
  const ints = flatten(int2dArray);

  return ints.map(int => (
    <Piece index={int} img={images[imageKeys[int - 1]]} key={int} />
  ));
};

class Puzzle extends Component {
  render() {
    const images = importAll(
      require.context(
        "../../images/tiles/olive-trees",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    const numRows = 8;
    const numCols = 10;

    const solutionMap = generate2DArray(numRows, numCols);

    const Pieces = generatePieces(shuffle2DArray(solutionMap), images);

    return <Grid numRows={numRows} numCols={numCols} Pieces={Pieces} />;
  }
}

export default Puzzle;
