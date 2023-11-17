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
        <AvatarComponent />
        <AvatarComponent seed="Finn" />
        <AvatarComponent seed="Kelly" />
        <AvatarComponent seed="Chloe" />
        <AvatarComponent seed="Henry" />
        <AvatarComponent seed="Bennett" />
        <AvatarComponent seed="Charlotte" />
        <AvatarComponent seed="Lily" />
        <AvatarComponent seed="Vale" />
        <AvatarComponent seed="Evelyn" />
        <AvatarComponent seed="Wiliam" />
        <AvatarComponent seed="Emma" />
        <AvatarComponent seed="Adriana" />
        <AvatarComponent seed="Harper" />
        <AvatarComponent seed="Julia" />
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
