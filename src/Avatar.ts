import { SVG } from "./SVG";
import { getAssetsAndCount } from "./imageData";

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
        getAssetsAndCount(config.author, "background").assets[config.background].elements
      )
      .addElement(getAssetsAndCount(config.author, "hairs").assets[config.hair].elements)
      .addElement(getAssetsAndCount(config.author, "clothes").assets[config.cloth].elements)
      .addElement(getAssetsAndCount(config.author, "face").assets[config.face].elements)
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
