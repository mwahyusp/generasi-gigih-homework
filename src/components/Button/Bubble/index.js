import React from "react";
import Bubble from "./style.module.css";

function index({ text, handleForm }) {
  return (
    <button className={Bubble.btn} onClick={handleForm}>
      {text}
    </button>
  );
}

export default index;
