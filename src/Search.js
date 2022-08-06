import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <input
          className="col-10"
          type="search"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className="col-2" type="submit" />
      </form>
    </div>
  );
}
