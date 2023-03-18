import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import "./styles/Dropdown.css";
import cityList from "../top-cities.json";

const Dropdown = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  console.log(cityList);

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
          {cityList.map((obj) => (
            <MenuItem
              key={obj.Key}
              value={obj.Key}
            >{`${obj.EnglishName}, ${obj.Country.EnglishName}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
