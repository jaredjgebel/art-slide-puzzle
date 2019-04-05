import React, { Component } from "react";
import flatten from "lodash.flatten";
import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";
import importAll from "../../logic/import-images";
import Row from "../Row/Row";
import Grid from "../Grid/Grid";

const Piece = ({ index, img, width = "98px", height = "97px" }) => (
  <div className="piece" style={{ width, height }} index={index}>
    <img src={img} />
  </div>
);

// fills a 2d array with an ascending counter
// generate2DArray(2, 3) => [[1, 2, 3], [4, 5, 6]]
export const generate2DArray = (numRows, numCols) => {
  let i = 1;
  const arr = new Array(numRows)
    .fill(null)
    .map(item => new Array(numCols).fill(null));

  for (let j = 0; j < numRows; j++) {
    for (let k = 0; k < numCols; k++) {
      arr[j][k] = i;
      i++;
    }
  }

  return arr;
};

export const shuffle2DArray = intArray => {
  const nestedLength = intArray[0].length;
  const flat = flatten(intArray);
  const shuffled = shuffle(flat);
  const rechunked = chunk(shuffled, nestedLength);

  return rechunked;
};

export const generatePieces = (int2dArray, images) => {
  const imageKeys = Object.keys(images);
  const ints = flatten(int2dArray);

  return ints.map(int => (
    <Piece index={int} img={images[imageKeys[int - 1]]} key={int} />
  ));
};

export const processMove = (intArray, pieceInt, spaceInt) => {
  const nestedLength = intArray[0].length;
  const flat = flatten(intArray);
  const pieceIndex = flat.indexOf(pieceInt);
  const spaceIndex = flat.indexOf(spaceInt);

  flat[pieceIndex] = spaceInt;
  flat[spaceIndex] = pieceInt;

  return chunk(flat, nestedLength);
};

// compare nested arrays
// ints and order of ints must match completely
export const compareMaps = (solutionMap, pieceMap) => {
  const rowResults = [];

  solutionMap.forEach((arr, yIndex) => {
    const result = arr.every((int, xIndex) => {
      return int === pieceMap[yIndex][xIndex];
    });

    rowResults.push(result);
  });

  return !rowResults.some(result => {
    return result === false;
  });
};

export const generateRows = (Pieces, numCols, height) => {
  let i = 0;
  let j = 0;
  const Rows = [];

  while (i < Pieces.length) {
    let rowPieces = [];

    while (j < numCols) {
      rowPieces.push(Pieces[i]);
      i++;
      j++;
    }

    Rows.push(React.cloneElement(<Row />, null, [...rowPieces]));
    j = 0;
  }

  return Rows;
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
