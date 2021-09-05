import React from "react";
import "./style/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const showSidebar = () => {
    document.querySelector(".sidebar__container").style.left = 0;
    document.querySelector(".sidebar").style.left = 0;
  };
  return (
    <nav className="row Navbar align-items-center gx-0">
      <h2 className="col-sm-4 col-md-4 col py-0">
        <NavLink to="/">
          {/* <img className="image" src={image} alt="logo" /> */}
          GA
        </NavLink>
      </h2>
      <div className="col-sm-8 col-md-8 nav-links">
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">about us</NavLink>
          </li>
          <li>
            <NavLink to="/admission">admission</NavLink>
          </li>
          <li>
            <NavLink to="/notice">notice</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">contact us</NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="col toggle"> */}
      <h5 className="col toggle">
        <i onClick={showSidebar} class="fas fa-bars"></i>
      </h5>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
