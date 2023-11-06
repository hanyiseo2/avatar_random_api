import app from "./src/app";

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}🔥`);
  console.log(`http://localhost:${port}`)
  console.log(`http://localhost:${port}/avatar`)
  console.log(`http://localhost:${port}/avatar?seed=hello`)
  console.log(`http://localhost:${port}/avatar?seed=hi`)
});