// fills a 2d array with an ascending counter
// generate2DArray(2, 3) => [[1, 2, 3], [4, 5, 6]]
const generate2DArray = (numRows, numCols) => {
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

export default generate2DArray;
