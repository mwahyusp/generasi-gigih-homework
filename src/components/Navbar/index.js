import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./style.module.css";

function Index({ handleClick }) {
  return (
    <header>
      <Link className={Navbar.logo} to="/">
        Music-App
      </Link>
      <div className={Navbar.navLeft}>
        <ul>
          <li onClick={handleClick}>
            <div className={Navbar.btnAuth}>SIGN IN</div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;
