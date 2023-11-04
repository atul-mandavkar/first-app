import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode === "light" ? "info-subtle" : "body-secondary"}`} data-bs-theme={`${props.mode === "light" ? "light" : "dark"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/">Features</Link>
              <Link className="nav-link" to="/about">{props.aboutInfo}</Link>
              <Link className="nav-link disabled" to="/" aria-disabled="true">Disabled</Link>
            </div>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "Enable" : "Disable"}`} Dark mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutInfo: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "text",
    aboutInfo: "About"
}