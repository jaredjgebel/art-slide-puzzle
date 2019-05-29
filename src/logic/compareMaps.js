// compare nested arrays
// ints and order of ints must match completely
const compareMaps = (solutionMap, pieceMap) => {
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

export default compareMaps;
