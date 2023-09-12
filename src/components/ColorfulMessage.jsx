import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontSize: "20px"
  };
  return <p style={contentStyle}> {props.message} </p>;
};

export default ColorfulMessage;
