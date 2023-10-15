import { SVG } from "./src/SVG";
import { clothes, hairs } from "./src/imageData";
import Avatar from "./src/Avatar";
import fs from "fs";

const svgStr = Avatar.create({ hair: 0, cloth: 1, background: 0, face: 0 });

fs.writeFileSync("image.svg", svgStr);
