import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
let name = "About Us";
let h = "Home";

export default function Navbar(props) {
  // const opennav = () => {
  //   let opennav = document.getElementById('navbar');
  //   opennav.style.right = "0px";

  // }
  // const closenav = () => {
  //   let opennav = document.getElementById('navbar');
  //   opennav.style.right = "-200px";
  // }
  // const linkStyle = {
  //   textDecoration: "none",
  //   color: 'Black'
  // };
  return (
    <div className={`navbar ${props.mode}`}>
      <ul id='navbar'>
      <h1>{props.title}</h1>
        {/* <li><Link to="/" style={linkStyle}>Home</Link></li> */}
        <li><a href="#" style={{color:props.mode===`dark`?`white`:`black`}}>Home</a></li>
        {/* <li><Link to="/about" style={linkStyle}>About Us</Link></li> */}
      </ul>
      <div className="form-check form-switch" onClick={props.toggle}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
      </div>
    </div>
  )
}
// Proptype
Navbar.propTypes = { title: PropTypes.string };            