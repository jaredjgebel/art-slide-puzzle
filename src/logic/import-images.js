// imports all files from a given directory
export function importAll(r) {
  let images = {};

  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

export const importOliveTrees = () => {
  return importAll(
    require.context("../images/tiles/olive-trees", false, /\.(png|jpe?g|svg)$/)
  );
};

export const importMaineCoast = () => {
  return importAll(
    require.context("../images/tiles/maine-coast", false, /\.(png|jpe?g|svg)$/)
  );
};

export const importWindflowers = () => {
  return importAll(
    require.context("../images/tiles/windflowers", false, /\.(png|jpe?g|svg)$/)
  );
};
