import React, { Component } from "react";

const Piece = ({ index }) => (
  <div style={{ width: "35px", height: "35px" }}>
    <p>{index}</p>
  </div>
);

// let twoDarray = new Array(x).fill(null).map(item => new Array(y).fill(null));

const generate2DArray = (numRows, numCols) => {
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

const generatePieces = (numRows, numCols) => {
  const intArray = generate2DArray(numRows, numCols);

  return intArray.map(arr => {
    return arr.map(int => <Piece index={int} />);
  });
};

class Puzzle extends Component {
  render() {
    const Pieces = generatePieces(8, 12);

    return Pieces;
  }
}

export default Puzzle;
