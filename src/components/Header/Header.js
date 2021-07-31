import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaConnectdevelop } from "react-icons/fa";
import "./header.css";
import { Button } from "../Button/Button";
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="nav">
      <div className="container">
        <Link to="/" className="logo-link">
          <FaConnectdevelop/>
          React JS
        </Link>

        <div className="header-icons" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "header-menu active" : "header-menu"}>
          <li className="menu-item">
            <Link to="/" className="menu-item-link" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/Services" className="menu-item-link" onClick={handleClick}>
              Services
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/Products" className="menu-item-link" onClick={handleClick}>
              Products
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/About" className="menu-item-link" onClick={handleClick}>
              About us
            </Link>
          </li>
          <li className="menu-btn">
            <Link to="/Contact" className="menu-item-link" onClick={handleClick}>
              <Button  name = "Sign Up"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
