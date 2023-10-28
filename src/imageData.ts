import { SVG, SVGElement } from "./SVG";

type Asset = {
  meta: {
    author: string;
    name: string;
    elementName: string;
    category: string;
  };
  elements: SVGElement[];
};

const assets: Asset[] = [
  {
    meta: {
      author: "Cecile",
      name: "User Avatars",
      elementName: "Red Clothes with White Collar",
      category: "clothes",
    },
    elements: [
      SVG.createPathElement(
        "M161.333 158.667C166.222 168 168.667 202 168.667 202H31.3333C31.3333 202 33.7779 168 38.6666 158.667C45.9999 144.667 99.9999 126.667 99.9999 126.667C99.9999 126.667 154 144.667 161.333 158.667Z",
        "#E67240"
      ),
      SVG.createPathElement(
        "M100.022 138.65C104.84 138.432 116 136.072 116 130.973V126.667C117.223 126.667 120.723 129.555 122.524 132C129.641 141.667 121.747 150.333 115.308 150.333C107.184 150.333 101.8 143.545 99.9999 140.28C98.1999 143.547 92.8159 150.333 84.6919 150.333C78.2532 150.333 70.3585 141.667 77.4759 132C79.2765 129.555 82.7772 126.667 83.9999 126.667V130.973C83.9999 136.072 95.4612 138.432 100.022 138.65Z",
        "white"
      ),
    ],
  },
  {
    meta: {
      author: "Cecile",
      name: "User Avatars",
      elementName: "Pink Clothes with Black Collar",
      category: "clothes",
    },
    elements: [
      SVG.createPathElement(
        "M161.333 158.667C166.222 168 168.667 202 168.667 202H31.3333C31.3333 202 33.7779 168 38.6666 158.667C45.9999 144.667 99.9999 126.667 99.9999 126.667C99.9999 126.667 154 144.667 161.333 158.667Z",
        "#FFC9B3"
      ),
      SVG.createPathElement(
        "M100.022 138.65C104.84 138.432 116 136.072 116 130.973V126.667C117.223 126.667 120.723 129.555 122.524 132C129.641 141.667 121.747 150.333 115.308 150.333C107.184 150.333 101.8 143.545 99.9999 140.28C98.1999 143.547 92.8159 150.333 84.6919 150.333C78.2532 150.333 70.3585 141.667 77.4759 132C79.2765 129.555 82.7772 126.667 83.9999 126.667V130.973C83.9999 136.072 95.4612 138.432 100.022 138.65Z",
        "black"
      ),
    ],
  },
  {
    meta: {
      author: "Cecile",
      name: "User Avatars",
      elementName: "Black curly hairs",
      category: "hairs",
    },
    elements: [
      SVG.createPathElement(
        "M148.333 106.333C153.741 88.3727 157.075 57.6667 134.333 36.6667C116.953 20.6173 69.9999 19 53.6666 54C50.9399 59.8427 54.6666 69 61.9999 68.6667C64.8819 68.5333 66.6666 77.6667 68.3333 83.3333C65.9999 106.333 45.2119 106.758 34.6666 124.333C21.6666 146 37.6666 178 75.9999 178C114.333 178 136.308 146.27 148.333 106.333Z",
        "black"
      ),
    ],
  },
  {
    meta: {
      author: "Cecile",
      name: "User Avatars",
      elementName: "white face",
      category: "face",
    },
    elements: [
      SVG.createPathElement(
        "M116 134.667C116 134.667 107.489 139.333 99.66 139.333C91.8307 139.333 84 134.667 84 134.667V120C82.3157 120.266 80.6094 120.368 78.9054 120.303C62.9134 120.301 56.8834 97.0073 60 68.6667C62 68.6667 66.6667 68.6667 73.3334 59.3333C71.6667 72.3333 91 70.3333 98.3334 60C94.6667 72.3333 104.333 80.6667 112.667 75.6667C129.007 65.862 132.681 95.7507 116 96V134.667Z",
        "#FFB597"
      ),
    ],
  },
  {
    meta: {
      author: "Cecile",
      name: "User Avatars",
      elementName: "black background",
      category: "background",
    },
    elements: [SVG.createRectElement("200", "200", "#1D0024")],
  },
  {
    meta: {
      author: "Cecile",
      name: "User Avatars",
      elementName: "gray background",
      category: "background",
    },
    elements: [SVG.createRectElement("200", "200", "#806A6A")],
  },
];

export function getAssets(author: string, category: string) {
  let filteredAssets = assets.filter(
    (elem) => elem.meta.author == author && elem.meta.category == category
  );
  return filteredAssets;
}
