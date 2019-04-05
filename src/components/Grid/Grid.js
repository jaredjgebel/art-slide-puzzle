import React from "react";
import Row from "../Row/Row";

const Grid = ({ numRows, numCols, Pieces }) => {
  let index = 0;
  let pieces = Array.from(Pieces);

  const Rows = Array(numRows).fill(null);

  const FilledRows = Rows.map(space => {
    let row = <Row>{pieces.slice(index, index + numCols)}</Row>;
    index += numCols;

    return row;
  });
  console.log(FilledRows);

  return <div className="grid">{FilledRows}</div>;
};

export default Grid;
