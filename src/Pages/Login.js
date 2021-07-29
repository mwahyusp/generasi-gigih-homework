import React from "react";
import Button from "../components/Button";
import "./login.css";

function Login() {
  const handleClick = () => {
    const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const Response_Type = "token";
    const Redirect_URI = "http://localhost:3000";
    const Scope = "playlist-modify-private";
    window.location = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=true`;
  };

  return (
    <div className="loginPages">
      <h1>Login Pages</h1>
      <div onClick={handleClick}>
        <Button text="Login" />
      </div>
    </div>
  );
}

export default Login;