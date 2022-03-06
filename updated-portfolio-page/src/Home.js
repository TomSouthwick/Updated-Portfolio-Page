import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav.js";

function Home() {
  useEffect(() => {
    var app = document.getElementById("app");

    var typewriter = new window.Typewriter(app, {
      loop: false,
    });

    typewriter
      .typeString("Hi. I'm Tom Southwick")
      .pauseFor(3500)
      .deleteAll()
      .typeString("Welcome to my profile")
      .pauseFor(2500)
      .deleteChars(7)
      .typeString("<strong>altered!</strong>")
      .pauseFor(2500)
      .start();
  });

  return (
    <div className="App">
      <Nav />
      <div
        style={{
          textAlign: "center",
          backgroundColor: "black",
          minHeight: "600px",
          color: "#ffffff",
        }}
      >
        <img src="./assets/tom.png" className="display-photo" />
        <h1 style={{ marginTop: "10px" }}>
          <div id="app"></div>
        </h1>
        <h5 style={{ opacity: 0.8, marginTop: "20px" }}>
          I am learning the profession of teh cockroach
        </h5>

        <p
          style={{
            color: "#818189",
            margin: "24px auto 0",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          Hello can you see me = giant roach. My flatmate is very nervous
          sometimes he doesn't like it when I code, as such he often calls me
          steve jobs
        </p>
        <div className="social-links">
          <a
            href="https://github.com/TomSouthwick?tab=repositories"
            target="_blank"
          >
            <img
              style={{ marginRight: "7px" }}
              src="./assets/GitHub-Mark-Light-64px.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/tomsouthwick/" target="_blank">
            <img src="./assets/linkedin-4-64.png" alt="" />
          </a>
        </div>
      </div>
      <div className="container" style={{ color: "#ffffff" }}>
        <div className="row">
          <div
            className="col-12"
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "39px",
            }}
          >
            <h2>My Projects</h2>
            <p>link to my Github repositories</p>
          </div>
          <div className="col-md-8 col-sm-12">
            <img
              style={{ borderRadius: "5px" }}
              src="https://monicalent.com/images/blog/hawaii-house-2.jpg"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <h4>Project 1</h4>
            <p>Description</p>
            <div></div>
          </div>
          <hr style={{ margin: "40px 10px" }} />
          <div className="col-md-4">eey</div>
          <div className="col-md-4">eey</div>
          <div className="col-md-4">eey</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
