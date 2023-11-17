const generateRnadomSeed = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  const combined = timestamp + random;
  return combined.toString(16);
};

export default generateRnadomSeed;
