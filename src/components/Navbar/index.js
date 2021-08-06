import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./style.module.css";

function Index({ handleClick }) {
  return (
    <header>
      <Link className={Navbar.logo} to="/">
        J
        <i className="fas fa-compact-disc" />
        FY
      </Link>
      <div className={Navbar.navLeft}>
        <ul>
          <li>Premium</li>
          <li>About</li>
          <li>Support</li>
          <li onClick={handleClick}>
            <div className={Navbar.btnAuth}>SIGN IN</div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;