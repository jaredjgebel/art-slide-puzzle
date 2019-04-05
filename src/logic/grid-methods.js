import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";
import flatten from "lodash.flatten";

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
