import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

function About() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <div className="container">
          <h1>About Me:</h1>
          <div className="row" style={{ marginTop: "50px" }}>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="col-md-6 col-sm-12"
            >
              <img src="./assets/Project-1.png"></img>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="col-md-6 col-sm-12 aboutMeText"
            >
              <div>
                I am a student at Sydney University studying full stack web
                development. I am currently building and desinging a portfolio
                page. For inquires please use the below LinkedIn link or
                navigate to the contact section to fill out an inquiry!{" "}
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
