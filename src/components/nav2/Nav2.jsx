import React from "react";
import "./Nav2.css";
import { NavLink } from "react-router-dom";

function Nav2({ toggleMenu, isOpen }) {
  return (
    <div className={`Nav2 ${isOpen ? "right" : ""}`}>
      <div className="head">
        <i className="fa-solid fa-xmark" onClick={toggleMenu}></i>
      </div>
      <div className="nav2-action">
        <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
          home
        </NavLink>
        <NavLink
          exact
          to="/About"
          activeClassName="active"
          onClick={toggleMenu}
        >
          about us
        </NavLink>
        <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
          dr ravleen sabharwal
        </NavLink>
        <NavLink
          exact
          to="/Services"
          activeClassName="active"
          onClick={toggleMenu}
        >
          services
        </NavLink>
        <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
          health screening
        </NavLink>
        <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
          fees
        </NavLink>
        <NavLink
          exact
          to="/Contact"
          activeClassName="active"
          onClick={toggleMenu}
        >
          contact us
        </NavLink>
      </div>
    </div>
  );
}

export default Nav2;
