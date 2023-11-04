import { SVG } from "./SVG";
import { getAssets } from "./imageData";

type AvatarConfig = {
  author: string;
  hair: number;
  cloth: number;
  background: number;
  face: number;
};
export class Avatar {
  static create(config: AvatarConfig): string {
    const background = getAssets(config.author,"background")
    const hairs = getAssets(config.author,"hairs")
    const clothes = getAssets(config.author,"clothes")
    const face = getAssets(config.author,"face")
    let svg = new SVG(200, 200).addElement(background[config.background].elements)
    .addElement(hairs[config.hair].elements)
    .addElement(clothes[config.cloth].elements)
    .addElement(face[config.face].elements)
    .toXml()
      return svg;
  }
}

export default Avatar;

// (req, res) => {

//     hash = random()()(())

//     cloth = hash.slice(0, 3) % clothes.length
//     hair = hash.slice(4, 7) % hairs.length
//     faces = hash.slice(8, 11) % face.length

//     Avatar.create({
//         cloth, hair, background, faces
//     })

//     res.send(svg)

// }
