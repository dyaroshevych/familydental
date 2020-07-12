import React from "react";
import { Link } from "react-router-dom";

import Links from "./Links/Links";
import Sidebar from "./Sidebar/Sidebar";

import logoSvg from "../../assets/img/logo.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Sidebar />
      <ul className="Navigation_list">
        <li>
          <Link to="/">
            <img className="Logo" src={logoSvg} alt="Family Dental" />
          </Link>
        </li>
        <li>
          <Links className="Navigation_links" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
