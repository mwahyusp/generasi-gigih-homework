import React from "react";
import Bubble from "./Bubble.css";

function index({ text, handleForm }) {
  return (
    <button className={Bubble.btn} onClick={handleForm}>
      {text}
    </button>
  );
}

export default index;