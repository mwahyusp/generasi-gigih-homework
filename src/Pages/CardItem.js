import React, { useState, useEffect } from "react";
import Card from "../components/Card/";
import Data from "../data/sampleData";
import "../components/Card/Card.css";
import Navbar from "../components/Navbar";

function CardItem() {
  const [Token, setToken] = useState("");
  const [Track, setTrack] = useState(Data);

  const handleClick = () => {
    const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const Response_Type = "token";
    const Redirect_URI = "http://localhost:3000";
    const Scope = "playlist-modify-private";
    window.location = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=true`;
  };

  const getTokenFromUrl = hash => {
    const stringAfterHastag = hash.substring(1);
    const paramInUrl = stringAfterHastag.split("&");
    const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
      // console.log(currentValue);
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramSplitUp;
  };

  useEffect(() => {
    if (window.location.hash) {
      const access_token = getTokenFromUrl(window.location.hash);
      setToken(access_token);
    }
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query);
  };

  const getTrackData = query => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + Token.access_token
      }
    })
      .then(res => res.json())
      .then(data => setTrack(data.tracks.items));
  };

  console.log(Track);

  return (
    <>
      <Navbar handleSearch={handleSearch} handleClick={handleClick} />
      <h1 style={{ marginLeft: 20, marginBottom: 0, fontWeight: 600 }}>CREATE PLAYLIST</h1>
      <div className="card-item">
        {Track.map(D => (
          <Card
            key={D.id}
            image={D.album.images[0].url}
            title={D.name}
            artist={D.artists[0].name}
            album={D.album.name}
            url={D.album.external_urls.spotify}
          />
        ))}
      </div>
    </>
  );
}

export default CardItem;
