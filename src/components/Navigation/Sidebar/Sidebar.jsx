import React, { useState } from "react";

import Links from "../Links/Links";

import "./Sidebar.scss";

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="Backdrop" isvisible={String(visible)}></div>
      <div className="Sidebar" isvisible={String(visible)}>
        <div>
          <label
            className="Sidebar_toggleButton"
            htmlFor="sidebar-toggle"
            isopen={String(visible)}
          >
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input
            type="checkbox"
            id="sidebar-toggle"
            name="sidebar-toggle"
            value="toggle navigation"
            checked={visible}
            onChange={toggleSidebar}
          />
        </div>
        <Links className="Sidebar_links" />
      </div>
    </>
  );
};

export default Sidebar;
