import Avatar from "./Avatar";
import fs from "fs";
import { getAssets } from "./imageData";
import {getRandomInt} from './util'

type Author = | "Cecile";
const authors: Author[] = ["Cecile"]
// type Author = | "Cecile"| "Hanyi" | "Hyunwoo";
// const authors: Author[] = ["Cecile", "Hanyi","Hyunwoo"]

export async function createRandomAvatar(req:Request, res:Response) {
    let option = ["background", "hairs", "clothes", "face"]
    const randomIndex = Math.floor(Math.random()*authors.length)
    const assetsArr = option.map((option)=> getRandomInt(getAssets(authors[randomIndex], option).length))
    
    const avatarConfig = Avatar.create({
        author: authors[randomIndex],
        background:  assetsArr[0],
        hair: assetsArr[1],
        cloth:  assetsArr[2],
        face:  assetsArr[3],
    });
      fs.writeFileSync("image.svg", avatarConfig);
      
}
export async function getCreatedImage() {}
