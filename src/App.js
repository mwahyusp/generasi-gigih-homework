import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CreatePlaylist from "./Pages/CreatePlaylist";
import Login from "./Pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { getTokenFromUrl } from "./Requirement/service";
import { getToken } from "./Rdux/tokenSlice";

function App() {
  const Token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const access_token = getTokenFromUrl(window.location.hash);
      dispatch(getToken(access_token));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {Token !== "" ? <CreatePlaylist /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {Token !== "" ? <Redirect to="/create-playlist" /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;