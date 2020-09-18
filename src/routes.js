import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Subscriber from "./pages/Subscriber";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Collaborator from "./pages/Collaborator";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/subscriber">
          <Subscriber />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/collaborator">
          <Collaborator />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
