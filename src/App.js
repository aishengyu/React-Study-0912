import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    //<React.Fragment>
    <>
      <h1 style={{ color: "red" }}> こんにちは </h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>登録</button>
    </>
    //</React.Fragment>
  );
};

export default App;
