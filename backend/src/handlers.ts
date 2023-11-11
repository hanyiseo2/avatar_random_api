import Avatar from "./Avatar";
import { getAssets, getAuthorList } from "./imageData";
import { Request, Response } from "express";
import sha256 from "sha256";

export async function createAvatar(req: Request, res: Response) {
  const params = req.query;
  const seed = params.seed ? String(params.seed) : String(Math.random());
  const randomNumbers = sha256(seed, { asBytes: true });

  const authors = getAuthorList();
  const author = authors[randomNumbers[0] % authors.length];

  const backgrounds = getAssets(author, "background");
  const hairs = getAssets(author, "hairs");
  const clothes = getAssets(author, "clothes");
  const faces = getAssets(author, "face");

  const avatarConfig = {
    author: author,
    background: randomNumbers[1] % backgrounds.length,
    hair: randomNumbers[2] % hairs.length,
    cloth: randomNumbers[3] % clothes.length,
    face: randomNumbers[4] % faces.length,
  };
  const svgStr = Avatar.create(avatarConfig);

  res.send(svgStr);
  //   res.sendFile(path.join(__dirname, 'frontend/src/')svgStr);
}
