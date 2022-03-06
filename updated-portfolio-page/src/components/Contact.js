import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

function Contact() {
  return (
    <div className="App">
      <Nav />
      <div style={{ color: "white", paddingTop: "50px" }}>
        <div>
          Contact Me:
          <textarea></textarea>
          <button class="btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
