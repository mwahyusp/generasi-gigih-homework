import React, { useState } from "react";
import Card from "../components/Card";
import Data from "../Data/sampleData";
import "../components/Card/Card.css";
import Navbar from "../components/Navbar";
import Bubble from "../components/Button/Bubble";
import Form from "../components/Form";
import {
  getTrackData,
  filterData,
  createPlaylist
} from "../Requirement/service";
import { useSelector } from "react-redux";

function CreatePlaylist() {
  const [Tracks, setTracks] = useState(Data);
  const [TrackSelected, setTrackSelected] = useState([]);
  const [Create, setCreate] = useState(false);
  const Token = useSelector(state => state.token.token);
  const User = "317bz6wm4yksflkr44ylvqyqbhze";

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query, Token).then(data =>
      TrackSelected.length > 0
        ? setTracks(filterData(data.tracks.items, TrackSelected))
        : setTracks(data.tracks.items)
    );
  };

  const handleDeselect = data => {
    setTrackSelected(TrackSelected.filter(T => T.uri !== data.uri));
  };

  const handleSelect = data => {
    setTrackSelected([data, ...TrackSelected]);
  };

  const handleForm = () => {
    setCreate(!Create);
  };

  const handleCreate = async e => {
    e.preventDefault();
    if (TrackSelected.length > 0) {
      createPlaylist(e, User, Token, TrackSelected);
      alert("Playlist Created!");
    } else {
      alert("You need songs to make a playlist, choose some!");
    }
  };

  // const getCurrentProfile = () => {
  //   const url = `https://api.spotify.com/v1/me`;
  //   fetch(url, {
  //     headers: {
  //       Authorization: "Bearer " + Token.access_token
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => setUser(data));
  // };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      {
        <>
          <div className="create-playlist">
            <h1>Create Playlist</h1>
            {TrackSelected.length > 0 && (
              <Bubble
                handleForm={handleForm}
                text={Create ? "Cancel" : "Create Playlist"}
              />
            )}
          </div>
          {Create && <Form handleCreate={handleCreate} />}
          <div className="card-item">
            {Tracks.map(Track =>
              TrackSelected.find(S => S.uri === Track.uri) ? (
                <Card
                  key={Track.uri}
                  image={Track.album.images[0].url}
                  title={Track.name}
                  artist={Track.artists[0].name}
                  album={Track.album.name}
                  url={Track.album.external_urls.spotify}
                  btnText="deselect"
                  handleSelect={() => handleDeselect(Track)}
                />
              ) : (
                <Card
                  key={Track.uri}
                  image={Track.album.images[0].url}
                  title={Track.name}
                  artist={Track.artists[0].name}
                  album={Track.album.name}
                  url={Track.album.external_urls.spotify}
                  btnText="select"
                  handleSelect={() => handleSelect(Track)}
                />
              )
            )}
          </div>
        </>
      }
    </>
  );
}

export default CreatePlaylist;