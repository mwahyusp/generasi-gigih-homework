import React from "react";
import Navbar from "../../components/Navbar";
import Style from "./style.module.css";

function index() {
  const handleClick = () => {
    const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const Response_Type = "token";
<<<<<<< HEAD
<<<<<<<< HEAD:src/Pages/Landing/index.js
    const Redirect_URI = "http://localhost:3000/callback";
========
    const Redirect_URI = "http://localhost:3000/";
>>>>>>>> e1cefb1914cf7740000a3037d0c5e43d4a99379b:src/Pages/Login.js
=======
    const Redirect_URI = "http://localhost:3000/";
>>>>>>> e1cefb1914cf7740000a3037d0c5e43d4a99379b
    const Scope = "playlist-modify-private";
    window.location = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=true`;
  };

  return (
    <div>
      <Navbar handleClick={handleClick} />
      <div className={Style.container}>
      </div>
    </div>
  );
}

export default index;
