import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

function Resume() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <img src="./assets/cv_templates_with_photo.jpeg" alt="resume"></img>
      </div>
      <div></div>
    </div>
  );
}

export default Resume;
