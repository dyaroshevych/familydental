import React from "react";
import PropTypes from "prop-types";

import "./InfoBox.scss";

const InfoBox = ({ type, message }) => (
  <span className="InfoBox" data-type={type}>
    {message}
  </span>
);

InfoBox.propTypes = {
  type: PropTypes.oneOf(["success", "danger"]),
  message: PropTypes.string,
};

export default InfoBox;
