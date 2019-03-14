import React, { Component } from "react";
import flatten from "lodash.flatten";
import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";

const Piece = ({ index }) => (
  <div style={{ width: "35px", height: "35px" }}>
    <p>{index}</p>
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

export const generatePieces = intArray => {
  return intArray.map(arr => {
    return arr.map(int => <Piece index={int} key={int} />);
  });
};

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

class Puzzle extends Component {
  render() {
    const solutionMap = generate2DArray(4, 4);
    const Pieces = generatePieces(shuffle2DArray(solutionMap));

    return Pieces;
  }
}

export default Puzzle;
