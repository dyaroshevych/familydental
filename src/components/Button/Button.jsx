import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ children, click, size, color }) => (
  <button
    onClick={click}
    className="Button"
    data-size={size}
    data-color={color}
  >
    {children}
  </button>
);

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  color: PropTypes.oneOf(["green", "white"]),
  click: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
