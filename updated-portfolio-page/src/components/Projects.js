import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

const projectData = [
  {
    title: "SpeakEasy",
    meta: "A Cognitive Speec Based Translator App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur turpis nunc, iaculis luctus ligula lobortis eu. Donec leo nunc, mollis at vulputate vel, faucibus in sem. Vestibulum nec tellus quis mi tempor facilisis sed sed velit. Curabitur euismod, diam vitae dapibus tempus, elit libero tempus libero, sed mollis sem nibh nec elit. Nam posuere dignissim erat, non consectetur leo tempus in. Donec nec neque lacus. Etiam fermentum neque ac porttitor vestibulum.Phasellus pharetra vitae sapien vitae elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas venenatis, quam in scelerisque volutpat, velit ligula ultricies orci, sit amet placerat lorem dui et nunc. Praesent lectus metus, ullamcorper vitae iaculis in, rutrum vel felis. Aliquam eget felis urna. Sed volutpat lorem in eleifend suscipit. Nam sit amet faucibus nisl. Pellentesque sed hendrerit ex. Duis a vehicula ex. Morbi fringilla turpis vel arcu ultricies dapibus. Aliquam gravida mi et accumsan commodo.",
    imageSrc:
      "https://thumbs.dreamstime.com/b/young-handsome-man-holding-banana-as-gun-his-temple-isolated-white-background-young-handsome-man-holding-banana-as-gun-155828766.jpg",
  },
  {
    title: "SpeakEasy",
    meta: "A Cognitive Speec Based Translator App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur turpis nunc, iaculis luctus ligula lobortis eu. Donec leo nunc, mollis at vulputate vel, faucibus in sem. Vestibulum nec tellus quis mi tempor facilisis sed sed velit. Curabitur euismod, diam vitae dapibus tempus, elit libero tempus libero, sed mollis sem nibh nec elit. Nam posuere dignissim erat, non consectetur leo tempus in. Donec nec neque lacus. Etiam fermentum neque ac porttitor vestibulum.Phasellus pharetra vitae sapien vitae elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas venenatis, quam in scelerisque volutpat, velit ligula ultricies orci, sit amet placerat lorem dui et nunc. Praesent lectus metus, ullamcorper vitae iaculis in, rutrum vel felis. Aliquam eget felis urna. Sed volutpat lorem in eleifend suscipit. Nam sit amet faucibus nisl. Pellentesque sed hendrerit ex. Duis a vehicula ex. Morbi fringilla turpis vel arcu ultricies dapibus. Aliquam gravida mi et accumsan commodo.",
    imageSrc:
      "https://thumbs.dreamstime.com/b/young-handsome-man-holding-banana-as-gun-his-temple-isolated-white-background-young-handsome-man-holding-banana-as-gun-155828766.jpg",
  },
];

function Projects() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <h1>My Projects </h1>
        <div class="container">
          {projectData.map((project) => (
            <div class="row mt-4" style={{ textAlign: "left" }}>
              <div class="col-lg-4 col-12-sm">
                <img src={project.imageSrc}></img>
              </div>
              <div class="col-lg-8 col-12-sm">
                <h4>{project.title}</h4>
                <h6>{project.meta}</h6>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
          My projects
        </div>
      </div>
    </div>
  );
}

export default Projects;
