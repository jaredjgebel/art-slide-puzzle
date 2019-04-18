import React from "react";
import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";
import flatten from "lodash.flatten";
import Piece from "../components/Piece/Piece";
import Space from "../components/Space/Space";

// fills a 2d array with an ascending counter
// generate2DArray(2, 3) => [[1, 2, 3], [4, 5, 6]]
export const generate2DArray = (numRows, numCols) => {
  let i = 1;
  const arr = [];

  for (let j = 0; j < numRows; j++) {
    let row = [];
    for (let k = 0; k < numCols; k++) {
      row.push(i);
      i++;

      if (k === numCols - 1) {
        arr.push(row);
      }
    }
  }

  return arr;
};

export const shuffle2DArray = intArray => {
  const nestedLength = intArray[0].length;
  const flat = flatten(intArray);
  const [space] = flat.slice(-1);
  const withoutSpace = flat.slice(0, -1);

  const shuffled = [...shuffle(withoutSpace), space];
  const rechunked = chunk(shuffled, nestedLength);

  return rechunked;
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

export const generatePieces = (int2dArray, images, width, height) => {
  const imageKeys = Object.keys(images);
  const ints = flatten(int2dArray);

  const mappedPieces = [];

  int2dArray.forEach(row => {
    const mappedRow = row.map(int =>
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

// export const isValidMove
