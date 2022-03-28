import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav.js";
import projectData from "./projects.json";

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
      .typeString("<strong>profile!</strong>")
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
          A full-stack web developer in training!
        </h5>

        <p
          style={{
            color: "#818189",
            margin: "24px auto 0",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          Hi, my name is Tom Southwick and I'm a recent graduate out of USYD.
          Studying a microcredential in software engineering has taught me how
          to problem solve common day issues using Javascript. I hope you enjoy
          viewing my portfolio page!
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
          </div>

          <div className="col-md-8 col-sm-12">
            <a
              target="_blank"
              className="project-link"
              href={projectData[0].liveUrl}
              style={{ display: "inherit" }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src={projectData[0].imgSrc}
                onMouseOver={(e) => {
                  e.currentTarget.src = projectData[0].gifSrc;
                  e.currentTarget.classList.add("fade-in-image");
                }}
                onMouseOut={(e) => {
                  e.currentTarget.src = projectData[0].imgSrc;
                  e.currentTarget.classList.remove("fade-in-image");
                }}
              />
            </a>
          </div>

          <div className="col-md-4 col-sm-12">
            <h4>{projectData[0].title}</h4>
            <p
              dangerouslySetInnerHTML={{ __html: projectData[0].description }}
              style={{
                marginTop: "50px",
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingBottom: "30px",
              }}
            />
            <p>
              <a href={projectData[0].liveUrl}>Github</a>
              <br />
              <a href={projectData[0].liveUrlApp}>Live App</a>
            </p>
          </div>

          <hr style={{ margin: "40px 10px" }} />
          {projectData.map((project, index) => {
            if (index === 0) {
              return <></>;
            }
            return (
              <div className="col-md-4 mb-4">
                <a
                  target="_blank"
                  className="project-link"
                  href={project.liveUrl}
                >
                  <img
                    alt=""
                    style={{
                      borderRadius: "5px",
                      width: "351px",
                      height: "249.69px",
                    }}
                    src={project.imgSrc}
                    onMouseOver={(e) => {
                      e.currentTarget.src = project.gifSrc;
                      e.currentTarget.classList.add("fade-in-image");
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.src = project.imgSrc;
                      e.currentTarget.classList.remove("fade-in-image");
                    }}
                  />
                </a>

                <h4 className="mt-2">{project.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: project.description }} />
                <p>
                  <a href={project.liveUrl}>Github</a>
                  <br />
                  <a href={project.liveUrlApp}>Live App</a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
