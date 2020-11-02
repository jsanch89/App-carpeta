import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav-bar.css'

const NavBar = () => {
  const location = useLocation();
  return (
    <div className={"nav-bar"}>
      <ul>
        {location.pathname.includes("/register") ? <li><Link className={"nav-bar-link"} to="/">Login</Link></li> : ""}
        {!location.pathname.includes("/register") ? <li><Link className={"nav-bar-link"} to="/register">Register</Link></li> : ""}
      </ul>
    </div>
  );
}

export default NavBar;