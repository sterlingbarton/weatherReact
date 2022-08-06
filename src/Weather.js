import axios from "axios";
import React, { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";

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
          wind: response.data.wind.speed,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
        });
      });
    }
  }, [props.city]);

  if (!props.city) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BallTriangle color="#F99244" radius={1.2} height={80} width={80} />
      </div>
    );
  } else
    return (
      <div className="Weather row">
        <img
          alt="icon"
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        />
        <h1>
          {props.city} {weatherData.temperature}°F | °C
        </h1>
        <h2>Saturday, August 6 12:38 PM</h2>
        <p>{weatherData.description}</p>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}mph</li>
        </ul>
      </div>
    );
}
