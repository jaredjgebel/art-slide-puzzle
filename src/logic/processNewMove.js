import chunk from "lodash.chunk";
import flatten from "lodash.flatten";

const processNewMove = (intArray, pieceInt, spaceInt) => {
  const nestedLength = intArray[0].length;
  const flat = flatten(intArray);
  const pieceIndex = flat.indexOf(pieceInt);
  const spaceIndex = flat.indexOf(spaceInt);

  flat[pieceIndex] = spaceInt;
  flat[spaceIndex] = pieceInt;

  return chunk(flat, nestedLength);
};

export default processNewMove;
