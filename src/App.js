import WeatherInfoContainer from "containers/WeatherInfoContainer";
import "App.css";
import Dropdown from "containers/Dropdown";

function App() {
  return (
    <div>
      <div>
        <h1 className="neon">Weather App</h1>
        <Dropdown />
        <WeatherInfoContainer />
      </div>
    </div>
  );
}

export default App;
