import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

function Resume() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <img
          style={{ width: "800px" }}
          src="./assets/Merged_document.png"
          alt="resume"
        ></img>
      </div>
      <a
        className="btn btn-primary"
        href="./assets/cv_templates_with_photo.jpeg"
        download
      >
        Download CV
      </a>
    </div>
  );
}

export default Resume;
