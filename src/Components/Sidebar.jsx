import React, { useEffect, useState } from "react";
import "./style/Sidebar.css";
import { useLocation } from "react-router-dom";
import image from "../img/glogo.png";

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (location.pathname === "/") setValue(1);
    else if (location.pathname === "/about-us") setValue(2);
    else if (location.pathname === "/admission") setValue(3);
    else if (location.pathname === "/notice") setValue(4);
    else setValue(5);
  }, [location.pathname]);

  const hideSidebar = () => {
    document.querySelector(".sidebar__container").style.left = "100%";
    document.querySelector(".sidebar").style.left = "-230px";
    document.querySelector(".sidebar").style.boxShadow =
      "2px 0px 5px lightgray;";
  };

  return (
    <div className="sidebar__container" onClick={hideSidebar}>
      <div className="sidebar">
        <div className="sidebar__icon" onClick={hideSidebar}>
          <NavLink to="/" className="text-center">
            <img className="image1" src={image} alt="logo" />
          </NavLink>
        </div>
        <h4 onClick={() => hideSidebar(value)}>X</h4>

        <ul>
          <li onClick={hideSidebar}>
            <NavLink
              className={value === 1 ? "glow text-white" : "not__glow"}
              to="/"
            >
              <i class="fas fa-home"></i> home
            </NavLink>
          </li>
          <li onClick={hideSidebar}>
            <NavLink
              className={value === 2 ? "glow text-white" : "not__glow"}
              to="/about-us"
            >
              <i class="fas fa-school"></i> about us
            </NavLink>
          </li>
          <li onClick={hideSidebar}>
            <NavLink
              className={value === 3 ? "glow text-white" : "not__glow"}
              to="/admission"
            >
              <i class="fas fa-user-plus"></i> admission
            </NavLink>
          </li>
          <li onClick={hideSidebar}>
            <NavLink
              className={value === 4 ? "glow text-white" : "not__glow"}
              to="/notice"
            >
              <i class="fas fa-bell"></i> notice
            </NavLink>
          </li>
          <li onClick={hideSidebar}>
            <NavLink
              className={value === 5 ? "glow text-white" : "not__glow"}
              to="/contact-us"
            >
              <i class="fas fa-link"></i> contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
