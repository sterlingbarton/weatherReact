import axios from "axios";
import React, { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./weather.css";

export default function Weather(props) {
  const [isFahrenheight, setIsFahrenheight] = useState(true);
  let [weatherData, setWeatherData] = useState({
    temperature: {
      fahrenheight: undefined,
      celsius: undefined,
    },
    humidity: undefined,
    wind: undefined,
    description: undefined,
    icon: undefined,
  });

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  let fullDate = `${month} ${date} ${time}`;

  useEffect(() => {
    if (props.city.length > 1) {
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?&q=${props.city}&units=imperial&appid=0dc80dcac647130267c51a963d637c8f`;
      axios.get(apiURL).then((response) => {
        setWeatherData({
          temperature: {
            fahrenheight: Math.round(response.data.main.temp),
            celsius: Math.round((response.data.main.temp - 32) * (5 / 9)),
          },
          humidity: Math.round(response.data.main.humidity),
          wind: Math.round(response.data.wind.speed),
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
          {props.city}{" "}
          <div
            style={{
              display: "inline",
            }}
            onClick={() => {
              setIsFahrenheight(!isFahrenheight);
            }}
          >
            {isFahrenheight
              ? weatherData.temperature.fahrenheight
              : weatherData.temperature.celsius}
            °F | °C
          </div>
        </h1>
        <h2>
          {day}, {fullDate}
        </h2>
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
