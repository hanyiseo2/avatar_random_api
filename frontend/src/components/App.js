import React from "react";
import AvatarComponent from "./AvatarComponent";
import Header from "./Header";
import "./App.css";
import createRandomString from "./RandomSeed";

const App = () => {
  return (
    <div className="app-container">
      <Header className="header" />
      <div className="avatar-grid">
        <AvatarComponent seed={createRandomString} />
        <AvatarComponent seed="Finn" />
        <AvatarComponent seed="Kelly" />
        <AvatarComponent seed="Lily" />
        <AvatarComponent seed="Chloe" />
        <AvatarComponent seed="Bennett" />
        <AvatarComponent seed="Charlotte" />
        <AvatarComponent seed="Christine" />
        <AvatarComponent seed="Ben" />
        <AvatarComponent seed="Evelyn" />
        <AvatarComponent seed="Wiliam" />
        <AvatarComponent seed="Ava" />
        <AvatarComponent seed="Adriana" />
        <AvatarComponent seed="Harper" />
        <AvatarComponent seed="Henry" />
      </div>
    </div>
  );
};
export default App;
