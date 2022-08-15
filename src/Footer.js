import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <p className="footer">
      This webpage was coded by Sterling Barton and is{" "}
      <a
        href="https://github.com/sterlingbarton/weatherReact"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced
      </a>
    </p>
  );
}
