import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result != "비김" &&
    props.result != ""
  ) {
    result = props.result === "승" ? "패" : "승";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
