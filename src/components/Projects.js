import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";
import projectData from "../projects.json";

function Projects() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <h1>My Projects </h1>
        <div class="container">
          {projectData.map((project) => (
            <a target="_blank" href={project.liveUrl} className="project-link">
              <div class="row mt-4" style={{ textAlign: "left" }}>
                <div class="col-lg-4 col-12-sm">
                  <img
                    // style={{ height: "250px", width: "400px" }}
                    className="project-img"
                    alt="project"
                    src={project.imgSrc}
                    onMouseOver={(e) => {
                      e.currentTarget.src = project.gifSrc;
                      e.currentTarget.classList.add("fade-in-image");
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.src = project.imgSrc;
                      e.currentTarget.classList.remove("fade-in-image");
                    }}
                  ></img>
                </div>
                <div class="col-lg-8 col-12-sm">
                  <h4>{project.title}</h4>
                  <h6>{project.meta}</h6>
                  <p
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
