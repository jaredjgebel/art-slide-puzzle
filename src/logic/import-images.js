// imports all files from a given directory
export default function importAll(r) {
  let images = {};

  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}
