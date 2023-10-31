import Avatar from "./Avatar";
import fs from "fs";
import { getAssetsAndCount } from "./imageData";
import {createRandomAssetIndex} from './util'

type Author = | "Cecile";
const authors: Author[] = ["Cecile"]
// type Author = | "Cecile"| "Hanyi" | "Hyunwoo";
// const authors: Author[] = ["Cecile", "Hanyi","Hyunwoo"]

export async function createRandomAvatar(req:Request, res:Response) {
    let assetsArr = []
    let option = ["background", "hairs", "clothes", "face"]
    const randomIndex = Math.floor(Math.random()*authors.length)

    for(let i =0;i<option.length;i++){
        //[ 2, 1, 2, 1 ]
        let randomValue = createRandomAssetIndex(getAssetsAndCount(authors[randomIndex],option[i]).count)
        assetsArr.push(randomValue)
    }
    console.log(assetsArr)
    const svgStr1 = Avatar.create({
        author: authors[randomIndex],
        background:  assetsArr[0],
        hair: assetsArr[1],
        cloth:  assetsArr[2],
        face:  assetsArr[3],
    });
      fs.writeFileSync("image.svg", svgStr1);
      
}
export async function getCreatedImage() {}
