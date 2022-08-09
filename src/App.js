import React, { useState } from "react";
import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  let [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="container">
        <Search city={city} setCity={setCity} handleSubmit={handleSubmit} />
        <Weather city={city} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
