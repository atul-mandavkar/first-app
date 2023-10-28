import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode === "light" ? "info-subtle" : "body-secondary"}`} data-bs-theme={`${props.mode === "light" ? "light" : "dark"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/">Features</a>
              <a className="nav-link" href="/">{props.aboutInfo}</a>
              <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
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