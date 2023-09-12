import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  const contentLedyStyle = {
    color: "pink",
    fontSize: "20px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}> こんにちは </h1>
      <p style={contentStyle}> お元気ですか？ </p>
      <p style={contentLedyStyle}> 元気です </p>
      <button onClick={onClickButton}>登録</button>
    </>
  );
};

export default App;
