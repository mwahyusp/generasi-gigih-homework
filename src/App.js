import PlaylistCard from "./components/PlaylistCard";
import data from "./data/samplePlaylist";
import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
  return (
    <div>
      <h1>Create Playlist</h1>
      <div className="playlistContainer">
        <PlaylistCard data={data} />
      </div>
    </div>
  );
}

export default (App);