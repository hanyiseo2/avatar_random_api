import Avatar from "./Avatar";
import { getAssets, getAuthorList, getAuthorsWithGender } from "./imageData";
import { Request, Response } from "express";
import sha256 from "sha256";

export async function createAvatar(req: Request, res: Response) {
  const params = req.query;
  const seed = params.seed ? String(params.seed) : String(Math.random());
  const randomNumbers = sha256(seed, { asBytes: true });

  const authors = getAuthorList();
  const author = authors[randomNumbers[0] % authors.length];

  const maleAvatarAuthors = getAuthorsWithGender("male");
  const gender = maleAvatarAuthors["male"].includes(author) ? "male" : "female";

  const backgrounds = getAssets(author, "backgrounds", gender);
  const hairs = getAssets(author, "hairs", gender);
  const clothes = getAssets(author, "clothes", gender);
  const faces = getAssets(author, "faces", gender);

  const avatarConfig = {
    author,
    background: randomNumbers[1] % backgrounds.length,
    hair: randomNumbers[2] % hairs.length,
    cloth: randomNumbers[3] % clothes.length,
    face: randomNumbers[4] % faces.length,
    gender,
  };

  const svgStr = Avatar.create(avatarConfig);

  res.send(svgStr);
}
