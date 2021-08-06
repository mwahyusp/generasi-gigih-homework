import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Rdux/userSlice";
import Style from "./style.module.css";
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";
import LikedSong from "../LikedSong";
const routes = [
  {
    path: "/create-playlist",
    main: () => <CreatePlaylist />
  },
  {
    path: "/liked-song",
    main: () => <LikedSong />
  }
];

function Index() {
  const Token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://api.spotify.com/v1/me`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + Token.access_token
      }
    })
      .then(res => res.json())
      .then(data => dispatch(login(data)));
  }, [dispatch, Token]);

  return (
    <div className={Style.container}>
      <div className={Style.sidebar}>
        <Link className={Style.logo} to="/">
          JOFY
        </Link>
        <ul className={Style.menu}>
<<<<<<< HEAD
          <li className={Style.menuTitle}>Recomend</li>
=======
          <li className={Style.menuTitle}>Recommend</li>
>>>>>>> e1cefb1914cf7740000a3037d0c5e43d4a99379b
          <li>
            <Link to="/create-playlist" className={Style.menuLink}><i className="fas fa-compact-disc" />For You</Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}><i className="fas fa-compact-disc" />Library</Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}><i className="fas fa-compact-disc" />Radio Station</Link>
          </li>
        </ul>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>My Music</li>
          <li>
            <Link to="/create-playlist" className={Style.menuLink}><i className="fas fa-compact-disc" />Create Playlist</Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}><i className="fas fa-compact-disc" />Liked Song</Link>
          </li>
        </ul>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>Playlist</li>
          <li>
            <Link to="/create-playlist" className={Style.menuLink}><i className="fas fa-compact-disc" />Lofi Hiphop</Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}><i className="fas fa-compact-disc" />Jepun</Link>
          </li>
        </ul>
      </div>
      <div className={Style.content}>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              children={<route.main />} 
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Index;
