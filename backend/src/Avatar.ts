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
    const backgrounds = getAssets("background", config.gender);
    const hairs = getAssets("hairs", config.gender);
    const faces = getAssets("face", config.gender);
    const clothes = getAssets("clothes", config.gender);
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
