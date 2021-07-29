import React from "react";
import Search from "../Search/index";
import Navbar from "./style.module.css";

function Index({ handleSearch }) {
  return (
    <header>
      <div className={Navbar.logo}>JOFY</div>
      {
        <div>
          <Search handleSubmit={handleSearch} />
        </div>
      }
    </header>
  );
}

export default Index;