import "../App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav.js";

const submitForm = (event) => {
  event.preventDefault();
  alert("Successful submission!");
};

function Contact() {
  return (
    <div className="App">
      <Nav />
      <div className="container" style={{ color: "white", paddingTop: "50px" }}>
        <form className="contact-form">
          <h1>Contact</h1>
          <p>
            <br />
            <label className="input-label">Email:</label>
            <br />
            <input type="email" required className="styled-input" />
          </p>
          <p>
            <label className="input-label">Subject:</label>
            <br />
            <input type="text" required className="styled-input" />
          </p>
          <p>
            <label className="input-label">Message:</label>
            <br />
            <textarea className="contact-form-body"></textarea>
          </p>
          <button onClick={submitForm} className="btn-primary contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
