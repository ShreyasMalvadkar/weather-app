import { Container, createTheme, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { dataSelector } from "selectors/weatherInfoSelector";
import "containers/styles/WeatherInfoContainer.css";

const WeatherInfoContainer = () => {
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#4d4d4d",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }
        }
      }
    }
  });

  const weatherData = useSelector(dataSelector);

  const degreeSymbol = "\u00b0";

  if (!weatherData) return <></>;

  const {
    Headline: { Text: headline },
    DailyForecasts: forecasts
  } = weatherData;

  return (
    <ThemeProvider theme={theme}>
      <Container className="weather-info-container" maxWidth="lg">
        <Paper elevation={6}>
          <Typography variant="h5" color={"whitesmoke"}>
            {headline}
          </Typography>
        </Paper>

        <Grid container spacing={2} justifyContent="center" justifyItems={"stretch"} marginTop="2rem">
          {forecasts &&
            forecasts.map((forecast, idx) => {
              const date = new Date(forecast.Date).toDateString();
              const iconPhrase = forecast.Day.IconPhrase;
              const minTemp = forecast.Temperature.Minimum;
              const maxTemp = forecast.Temperature.Maximum;
              const minTempStr = `${minTemp.Value} ${degreeSymbol}${minTemp.Unit}`;
              const maxTempStr = `${maxTemp.Value} ${degreeSymbol}${maxTemp.Unit}`;

              return (
                <Grid item display="flex" alignItems={"stretch"}>
                  <Paper key={idx} style={{ width: "10rem" }}>
                    <Typography variant="body1" color={"whitesmoke"} padding="0.5rem">
                      {date}
                    </Typography>
                    <Typography variant="body1" color={"whitesmoke"} padding="0.5rem">
                      {iconPhrase}
                    </Typography>
                    <Typography variant="body1" color={"whitesmoke"} padding="0.5rem">
                      {minTempStr} / {maxTempStr}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default WeatherInfoContainer;
