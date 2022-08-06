import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
