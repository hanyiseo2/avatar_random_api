import React from "react";
import AvatarComponent from "./AvatarComponent";
import Header from "./Header";
import "./App.css";
import "./AvatarComponent.css";

const App = () => {
  return (
    <div className="app_container">
      <Header className="header" />
      <div className="avatar_grid">
        <AvatarComponent seed="hanyii" />
        <AvatarComponent seed="Kelly" />
        <AvatarComponent seed="Joy" />
        <AvatarComponent seed="Chloe" />
        <AvatarComponent seed="Henry" />
        <AvatarComponent seed="Bennet" />
        <AvatarComponent seed="Charlotte" />
        <AvatarComponent seed="Brian" />
        <AvatarComponent seed="Vale" />
        <AvatarComponent seed="Evelyn" />
        <AvatarComponent seed="Wiliam" />
        <AvatarComponent seed="Emma" />
        <AvatarComponent seed="Adriana" />
        <AvatarComponent seed="Julia" />
        <AvatarComponent seed="Finn" />
        {/*<AvatarComponent/>*/}
      </div>
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
