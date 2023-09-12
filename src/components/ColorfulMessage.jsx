import React from "react";

export const ColorfulMessage = (props) => {
  //console.log(props);
  console.log("カラフル");
  const contentStyle = {
    color: props.color,
    fontSize: "20px"
  };
  return <p style={contentStyle}> {props.children} </p>;
};

// export default ColorfulMessage;
