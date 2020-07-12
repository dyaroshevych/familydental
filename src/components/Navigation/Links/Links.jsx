import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../../Button/Button";

import "./Links.scss";

const LINKS = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "about",
    path: "/about",
  },
];

const Links = ({ className }) => {
  const classes = ["Links"];

  if (className) {
    classes.push(className);
  }

  return (
    <ul className={classes.join(" ")}>
      {LINKS.map(({ name, path }, idx) => (
        <li className="Links_item" key={idx}>
          <NavLink
            to={path}
            exact
            className="Links_link"
            activeClassName="Links_link___active"
          >
            {name}
          </NavLink>
        </li>
      ))}
      <li className="Links_item">
        <Button size="sm" color="green">
          Appointment
        </Button>
      </li>
    </ul>
  );
};

export default Links;
