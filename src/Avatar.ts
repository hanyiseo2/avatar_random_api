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
    let svg = new SVG(200, 200)
      .addElement(
        getAssets(config.author, "background")[config.background].elements
      )
      .addElement(getAssets(config.author, "hairs")[config.hair].elements)
      .addElement(getAssets(config.author, "clothes")[config.cloth].elements)
      .addElement(getAssets(config.author, "face")[config.face].elements)
      .toXml();
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
