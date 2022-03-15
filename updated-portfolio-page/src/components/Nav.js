import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li id="nav-item">
          <Link to="/">TOM SOUTHWICK</Link>
        </li>
        <li
          style={{ left: 0 }}
          className="nav-item dropdown d-sm-block d-md-none"
        >
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MENU
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/projects">
              PORTFOLIO
            </Link>
            <Link className="dropdown-item" to="/about">
              ABOUT
            </Link>
            <Link className="dropdown-item" to="/resume">
              RESUME
            </Link>
            <Link className="dropdown-item" to="/contact">
              CONTACT
            </Link>
          </div>
        </li>
        <li className="d-none d-sm-none d-md-block">
          <Link to="/projects">PORTFOLIO</Link>
        </li>
        <li className="d-none d-sm-none d-md-block">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="d-none d-sm-none d-md-block">
          <Link to="/resume">RESUME</Link>
        </li>
        <li className="d-none d-sm-none d-md-block">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
