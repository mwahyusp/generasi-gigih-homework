import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Auth from "./Pages/Auth"
import Landing from "./Pages/Landing";
import { useSelector, useDispatch } from "react-redux";
import { getTokenFromUrl } from "./Requirement/Services";
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
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/liked-song">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {Token !== "" ? <Redirect to="/create-playlist" /> : <Landing />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
