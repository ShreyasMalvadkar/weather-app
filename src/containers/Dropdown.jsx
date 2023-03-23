import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import "containers/styles/Dropdown.css";
import cityList from "top-cities.json";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "actions/cityActions";
import { citySelector } from "selectors/citySelector";
import { getWeatherData } from "services/weatherApi.service";
import { startWeatherLoader } from "actions/weatherInfoActions";

const Dropdown = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector(citySelector);

  const handleChange = e => {
    dispatch(changeCity(e.target.value));
    dispatch(startWeatherLoader());
    getWeatherData(e.target.value, dispatch);
  };

  return (
    <div className="dropdown-container">
      <FormControl fullWidth className="dropdown">
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity}
          label="City"
          onChange={handleChange}
        >
          {cityList.map(obj => (
            <MenuItem key={obj.Key} value={obj.Key}>{`${obj.EnglishName}, ${obj.Country.EnglishName}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
