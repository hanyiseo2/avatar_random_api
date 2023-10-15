import { SVG } from "./SVG";
import { hairs, clothes } from "./imageData";

type AvatarConfig = {
  hair: number;
  cloth: number;
  background: number;
  face: number;
};

class Avatar {
  static create({ hair, cloth, background, face }: AvatarConfig) {
    const svg = new SVG(200, 200);

    hairs[hair].elements.forEach((e) => svg.addElement(e));
    clothes[cloth].elements.forEach((e) => svg.addElement(e));

    return svg.toXml();
  }

  static createFromHash(randomstate: number) {}
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
