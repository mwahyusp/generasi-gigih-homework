import React from "react";
import Title from "../Title";
import Album from "../Album";
import Description from "./style.module.css"

function index(props) {
  return (
    <div className={Description.text}>
      <Title title={props.title} />
      <Album artist={props.artist} album={props.album} />
    </div>
  );
}

export default index;
