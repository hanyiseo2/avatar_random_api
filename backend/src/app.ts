import express from "express";
import morgan from "morgan";
import { createAvatar } from "./handlers";
import path from "path";
import cors, { CorsOptions } from "cors";
const app = express();

const corsOptions: CorsOptions = {
  origin: "http://localhost:3000",
  methods: "GET",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../../frontend/src")));

app.get("/", createAvatar);

app.get("*", (req, res) => {
  res.redirect("/");
});

export default app;
