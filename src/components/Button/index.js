import React from "react";
import "./Button.css"

function index({text, url}) {
  const handleClick = () => {
    window.location = url;
  }

  return (
    <button type="submit" className="btn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default index;
