import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

function About() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <div className="container">
          <h1>About Me</h1>
          <div className="row" style={{ marginTop: "50px" }}>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="col-md-6 col-sm-12"
            >
              <img
                style={{ height: "500px" }}
                src="./assets/profilePic.jpeg"
              ></img>
            </div>
            <div
              style={{ padding: "50px", paddingTop: "100px" }}
              className="col-md-6 col-sm-12 aboutMeText"
            >
              <div style={{ marginBottom: "30px" }}>
                I am a student at Sydney University studying full stack web
                development. I am currently building and desinging a portfolio
                page. For inquires please use the below LinkedIn link or
                navigate to the contact section to fill out an inquiry!{" "}
              </div>
              <div>
                <h2>Contact me via</h2>
                <a href="mailto:tom.southwick@gmail.com">
                  <h4>tom.southwick@gmail.com</h4>
                </a>
                <a
                  href="https://www.linkedin.com/in/tomsouthwick/"
                  target="_blank"
                >
                  <h4>Linkedin</h4>
                </a>

                <a href="https://github.com/TomSouthwick" target="_blank">
                  <h4>Github</h4>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
