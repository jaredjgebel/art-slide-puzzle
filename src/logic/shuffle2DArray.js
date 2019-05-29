import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";
import flatten from "lodash.flatten";

const shuffle2DArray = intArray => {
  const nestedLength = intArray[0].length;
  const flat = flatten(intArray);
  const [space] = flat.slice(-1);
  const withoutSpace = flat.slice(0, -1);

  const shuffled = [...shuffle(withoutSpace), space];
  const rechunked = chunk(shuffled, nestedLength);

  return rechunked;
};

export default shuffle2DArray;
