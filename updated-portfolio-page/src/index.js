import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
    {/* <Home /> */}
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
