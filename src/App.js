import React, { useState } from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  let [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" />
      </form>
      <Weather city={city} />
      <p>
        This webpage was coded by Sterling Barton and is{" "}
        <a href="https://github.com/sterlingbarton/weatherReact">
          open-sourced
        </a>
      </p>
    </div>
  );
}

export default App;
