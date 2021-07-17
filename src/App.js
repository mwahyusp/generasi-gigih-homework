import "./App.css";
import Tracks from './components/Tracks'
// eslint-disable-next-line no-unused-vars
import Player from './components/Player'
import data from "./data/sampleData";

function App() {
  return (
    <div className="App">
      <Tracks data={data} />
    </div>
  );
}

export default App;
