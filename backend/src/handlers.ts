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
  const gender: string = randomNumbers[5] % 2 === 0 ? "man" : "woman";

  const backgrounds = getAssets("background", gender);
  const hairs = getAssets("hairs", gender);
  const clothes = getAssets("clothes", gender);
  const faces = getAssets("face", gender);

  const avatarConfig = {
    author: author,
    background: randomNumbers[1] % backgrounds.length,
    hair: randomNumbers[2] % hairs.length,
    cloth: randomNumbers[3] % clothes.length,
    face: randomNumbers[4] % faces.length,
    gender: gender,
  };
  const svgStr = Avatar.create(avatarConfig);

  res.send(svgStr);
}
