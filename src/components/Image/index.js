import React from "react";
import Image from "./style.module.css";

function index(props) {
  return (
    <div className={Image.img}>
      <img src={props.src} alt="thumbnail" />
    </div>
  );
}

export default index;
