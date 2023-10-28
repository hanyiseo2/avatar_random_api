import Avatar from "./src/Avatar";
import fs from "fs";
import app from "./src/app";

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}🔥`);
});

const svgStr = Avatar.create({
  author: "Cecile",
  hair: 0,
  cloth: 0,
  background: 1,
  face: 0,
});

fs.writeFileSync("image.svg", svgStr);
