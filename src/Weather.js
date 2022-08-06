// import axios from "axios";
// import React, { useEffect, useState } from "react";

export default function Weather(props) {
  //   let [weatherData, setWeatherData] = useState({
  //     temperature: undefined,
  //     humidity: undefined,
  //     wind: undefined,
  //     description: undefined,
  //     icon: undefined,
  //   });

  //   useEffect(() => {
  //     if (props.city) {
  //       let apiURL = `https://api.openweathermap.org/data/2.5/weather?&q=${props.city}&units=imperial&appid=0dc80dcac647130267c51a963d637c8f`;
  //       axios.get(apiURL).then((response) => {
  //         setWeatherData({
  //           temperature: Math.round(response.data.main.temp),
  //           humidity: response.data.main.humidity,
  //           wind: response.data.main.humidity,
  //           description: response.data.weather[0].description,
  //           icon: response.data.weather[0].icon,
  //         });
  //       });
  //     }
  //   }, [props.city]);

  //   useEffect(() => {}, []);

  //   // []
  //   // [string]
  //   //

  //   if (!props.city) {
  //     return (
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //         }}
  //       ></div>
  //     );
  //   }

  return (
    <div className="Weather row">
      <h1>Houston 90°F | °C</h1>
      <h2>Saturday, August 6 12:38 PM</h2>
      <p>Clear Sky</p>
      <ul>
        <li>Humidity: 73%</li>
        <li>Wind: 8mph</li>
      </ul>
    </div>
    // <ul
    //   style={{
    //     listStyleType: "none",
    //   }}
    // >
    //   <li>
    //     {props.city}: {weatherData.temperature}°F
    //   </li>
    //   <li>Description: {weatherData.description}</li>
    //   <li>Humidity: {weatherData.humidity}%</li>
    //   <li>Wind: {weatherData.wind}mph</li>
    //   <li>
    //     <img
    //       alt="icon"
    //       src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
    //     />
    //   </li>
    // </ul>
  );
}
