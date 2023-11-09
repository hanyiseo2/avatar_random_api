import express from "express";
import morgan from "morgan";
import {
  createAvatar,
} from "./handlers";
const app = express();

app.use(morgan("dev"));
// app.get("/", frontend);

/**
 *  create random avatar
 *  /avatar?seed=frankenstein
 */
app.get("/avatar", createAvatar);

export default app;

