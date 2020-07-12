import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "../../components/Navigation/Navigation";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Appointment from "../Appointment/Appointment";

import "./Layout.scss";

const Layout = () => (
  <div className="Layout">
    <Navigation />
    <div className="Layout_section">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/appointment" exact component={Appointment} />
        <Redirect from="/" to="/" />
      </Switch>
    </div>
  </div>
);

export default Layout;
