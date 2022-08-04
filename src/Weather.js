import axios from "axios";
import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({
    temperature: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    icon: undefined,
  });

  useEffect(() => {
    if (props.city) {
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?&q=${props.city}&units=imperial&appid=0dc80dcac647130267c51a963d637c8f`;
      axios.get(apiURL).then((response) => {
        setWeatherData({
          temperature: Math.round(response.data.main.temp),
          humidity: response.data.main.humidity,
          wind: response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
        });
      });
    }
  }, [props.city]);

  useEffect(() => {}, []);

  // []
  // [string]
  //

  if (!props.city) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Rings
          height="112"
          width="112"
          radius="15"
          color="violet"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

  return (
    <ul
      style={{
        listStyleType: "none",
      }}
    >
      <li>
        {props.city}: {weatherData.temperature}°F
      </li>
      <li>Description: {weatherData.description}</li>
      <li>Humidity: {weatherData.humidity}%</li>
      <li>Wind: {weatherData.wind}mph</li>
      <li>
        <img
          alt="icon"
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        />
      </li>
    </ul>
  );
}
