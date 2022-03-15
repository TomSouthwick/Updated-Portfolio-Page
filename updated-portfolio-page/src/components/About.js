import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

function About() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <div>About Me -</div>
      </div>
    </div>
  );
}

export default About;
