import express from "express";
import { createAvatar, storeCreatedImage, getCreatedImage } from "./handlers";
const app = express();

/**
 * 1. 아바타의 배경 도형, 헤어, 좌우(얼굴) 방향, 옷, 악세서리, 컬러를 조합하여 이미지를 제공
	2. 유저가 선택한 요소를 커스텀하여 아바타 이미지를 제공.
	3. 유저가 입력한 시드를 바탕으로 랜덤 아바타 이미지 제공.
 */

// 시작페이지
app.get("/");

/**
 *  create random avatar
 *  /random?seed=frankenstein
 */
app.get("/random", createAvatar);

/**
 * store avatar image
 * /store?seed=frankenstein
 */
app.get("/store", storeCreatedImage);

/**
 * customize the avatar
 * /custom/1
 */
app.get("/custom/:imgId", getCreatedImage);

export default app;
