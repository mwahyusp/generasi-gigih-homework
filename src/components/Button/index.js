import React from "react";
import "./Button.css"

function index({text}) {

  return (
    <button type="submit" className="btn">
      {text}
    </button>
  );
}

export default index;
