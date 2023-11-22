const createRandomString = () => {
  const random = Math.floor(Math.random() * 10000);
  return random.toString(16);
};

export default createRandomString;
