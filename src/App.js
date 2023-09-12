/* eslint react-hooks/exhaustive-deps: off */
// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickIncrement = () => {
    setNum(num + 1);
    console.log(num);
  };

  const onClickSwitchFaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  /* 初心者が良く起こるミス
  if (num % 3 === 0) {
    setFaceShowFlag(true);
  } else {
    setFaceShowFlag(false);
  }
  */
  useEffect(() => {
    console.log("useEffect!!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // }, []); [] 一回だけ実行します。
  }, [num]); // [num] numが変わった時だけ実行されます。

  return (
    <>
      <h1 style={{ color: "red" }}> こんにちは </h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickIncrement}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFaceShowFlag}> On/Off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😊😊😊😊</p>}
    </>
  );
};

// export default App;
