import React, { useState } from "react";
import "../style/Navbar.css";
import Nav2 from "./nav2/Nav2";
import logo2 from "../images/logo2.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showNav2, setShowNav2] = useState(false);

  const toggleMenu = () => {
    setShowNav2(!showNav2);
  };

  return (
    <>
      <nav>
        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>

        <img className="Logo" src={logo2} alt="" />
        <section className="nav2">
          <div className="action-container">
            <section className="action">
              <NavLink exact to="/" activeClassName="active">
                <a href="#">home</a>
              </NavLink>
              <NavLink exact to="/About" activeClassName="active">
                <a href="#">about us</a>
              </NavLink>
              <NavLink exact to="/" activeClassName="active">
                <a href="#">dr ravleen sabharwal</a>
              </NavLink>

              <NavLink exact to="/Services" activeClassName="active">
                <a href="#">services</a>
              </NavLink>
              <NavLink exact to="/" activeClassName="active">
                <a href="#">health screening</a>
              </NavLink>
              <NavLink exact to="/" activeClassName="active">
                <a href="#">fees</a>
              </NavLink>
              <NavLink exact to="/Contact" activeClassName="active">
                <a href="#">contact us</a>
              </NavLink>
            </section>
          </div>
          <section className="contact-number">
            <div className="nav-contact-elem">
              <i className="fa-solid fa-phone-volume"></i>
              <span>
                <p>00447393501000</p>
              </span>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </section>
        </section>
      </nav>
      {showNav2 && <Nav2 toggleMenu={toggleMenu} isOpen={showNav2} />}
    </>
  );
}

export default Navbar;
