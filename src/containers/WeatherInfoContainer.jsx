import { Typography } from "@mui/material";
import React from "react";

const WeatherInfoContainer = ({ weatherData }) => {
  const {
    Headline: { Text: headline }
  } = weatherData;
  return <Typography variant="h4">{headline}</Typography>;
};

export default WeatherInfoContainer;
