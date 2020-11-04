import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav-bar.css'

const LoggedNavBar = () => {
  const location = useLocation();
  return (
    <div className={"nav-bar"}>
      <ul>
        {location.pathname.includes("upload") ? <li><Link className={"nav-bar-link"} to="/">Files</Link></li> : ""}
        {!location.pathname.includes("upload") ? <li><Link className={"nav-bar-link"} to="/upload">upload</Link></li> : ""}
      </ul>
    </div>
  );
}

export default LoggedNavBar;