import { SVG } from "./SVG";
import { getAssets } from "./imageData";

type AvatarConfig = {
  author: string;
  hair: number;
  cloth: number;
  background: number;
  face: number;
  gender: string;
};
export class Avatar {
  static create(config: AvatarConfig): string {
    const backgrounds = getAssets(config.author, "backgrounds", config.gender);
    const hairs = getAssets(config.author, "hairs", config.gender);
    const faces = getAssets(config.author, "faces", config.gender);
    const clothes = getAssets(config.author, "clothes", config.gender);

    let svg = new SVG(200, 200).addElement(
      backgrounds[config.background].elements
    );
    if (config.gender == "male") {
      svg.addElement(clothes[config.cloth].elements);
      svg.addElement(faces[config.face].elements);
      svg.addElement(hairs[config.hair].elements);
    } else {
      svg.addElement(hairs[config.hair].elements);
      svg.addElement(clothes[config.cloth].elements);
      svg.addElement(faces[config.face].elements);
    }
    const result = svg.toXml();
    return result;
  }
}

export default Avatar;
