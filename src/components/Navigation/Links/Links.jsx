import React from "react";
import { NavLink, Link } from "react-router-dom";

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

const Links = ({ className, click = () => {} }) => {
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
            onClick={click}
          >
            {name}
          </NavLink>
        </li>
      ))}
      <li className="Links_item">
        <Link to="/appointment" exact onClick={click}>
          <Button size="sm" color="green">
            Appointment
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
