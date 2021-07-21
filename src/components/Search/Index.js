import React from "react";
import Search from "./style.module.css";

function Index({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Search Song.." />
      <button className={Search.btn} type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
  );
}

export default Index;
