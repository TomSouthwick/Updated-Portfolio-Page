import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li id="nav-item">
          <Link to="/">TOM SOUTHORIKCKC</Link>
        </li>
        <li>BLOG</li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>SPEAKING</li>
        <li>ABOUT</li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
