import WeatherInfoContainer from "containers/WeatherInfoContainer";
import "App.css";
import Dropdown from "containers/Dropdown";
import { useSelector } from "react-redux";
import { dataSelector } from "selectors/weatherInfoSelector";

function App() {
  const weatherData = useSelector(dataSelector);
  return (
    <div>
      <div>
        <h1 className="neon">Weather App</h1>
        <Dropdown />
        <WeatherInfoContainer weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
