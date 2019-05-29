const isValidMove = (pieceCoords, spaceIndex, grid2D) => {
  const [pieceRow, pieceCol] = pieceCoords;

  let spaceCol, spaceRow;

  grid2D.forEach((row, rowIndex) => {
    const hasSpace = row.indexOf(spaceIndex);

    if (hasSpace !== -1) {
      spaceRow = rowIndex;
      spaceCol = hasSpace;
    }
  });

  if (pieceRow === spaceRow) {
    if (pieceCol === spaceCol - 1 || pieceCol === spaceCol + 1) {
      return true;
    }
  }

  if (pieceCol === spaceCol) {
    if (pieceRow === spaceRow - 1 || spaceRow + 1) {
      return true;
    }
  }

  return false;
};

export default isValidMove;
