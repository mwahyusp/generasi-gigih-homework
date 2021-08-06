import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import Search from "../Search/Index";
>>>>>>> e1cefb1914cf7740000a3037d0c5e43d4a99379b
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
