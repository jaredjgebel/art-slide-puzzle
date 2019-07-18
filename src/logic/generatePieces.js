import React from "react";
import flatten from "lodash.flatten";
import Piece from "../components/Piece/Piece";
import Space from "../components/Space/Space";

const generatePieces = (int2dArray, images, width, height) => {
  const imageKeys = Object.keys(images);
  const ints = flatten(int2dArray);

  const mappedPieces = [];

  int2dArray.forEach(row => {
    const mappedRow = row.map(int =>
      int === ints.length ? (
        <Space
          index={int}
          key={int}
          width={width.toString()}
          height={height.toString()}
        />
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

export default generatePieces;
