//By this we can use this component in multiple apps if we want it. It just makes the main app file looks clean.
//And we can change the name of the title and home and about if we want from the main app file.
//It is because we are using props in the navbar component and we are passing the values from the main app file.
//So it is a reusable component. We can use it in multiple apps if we want.

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Form">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Forms">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'} mx-1`}>
            <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
  );
};

//these are the properties that we are passing from the main app file to the navbar component.
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    home : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
};
