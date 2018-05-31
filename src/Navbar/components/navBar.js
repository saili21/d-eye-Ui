import React from 'react';
import BrandLogo from '../../assets/images/nav-brand.png';
import '../../assets/css/navBar.css';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-white">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={BrandLogo} alt="barnd-logo" height="90" />
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="margin-10">|</li>
          <li className="">
            <a href="#" className="text-navbar">PRODUCT</a>
          </li>
          <li className="margin-10">|</li>
          <li>
            <a href="#" className="text-navbar">ABOUT</a>
          </li>
          <li className="margin-10">|</li>
          <li>
            <a href="#" className="text-navbar">CONTACT</a>
          </li>
          <li className="margin-10">|</li>
          <li>
          {/* <Link className="btn btn-sm btn-info right-space" to="/login">Login</Link> */}
            <a className="btn btn-sm btn-info right-space" onClick={props.showLogin}>LOGIN</a>
          </li>
        </ul>
      </div>
	</nav>
  )
}

export default NavBar
