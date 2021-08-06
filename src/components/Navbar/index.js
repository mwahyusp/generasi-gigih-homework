import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./style.module.css";
import { Button } from '@material-ui/core';

function Index({ handleClick }) {
  return (
    <header>
      <Link className={Navbar.logo} to="/">
       Music-App
      </Link>
      <div className={Navbar.navLeft}>
        <ul>
          <li onClick={handleClick}>
            <div><Button className={Navbar.btnAuth}>Sign In</Button></div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;