import React from "react";
import AvatarComponent from "./AvatarComponent";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <AvatarComponent seed="hanyii" />
      <AvatarComponent seed="Hyunwooo" />
      <AvatarComponent seed="Kelly" />
      <AvatarComponent seed="Adriana" />
      <AvatarComponent seed="Joy" />
      <AvatarComponent seed="Brian" />
      {/*<AvatarComponent/>*/}
    </div>
  );
};
export default App;

/**
 * "header"
 *
 * 각 아바타를 감싸는 container가 필요한 것 같다
 * "avatar"   "avatar"    "avatar"    "avatar"
 *  "seed"     "seed"      "seed"      "seed"
 */
