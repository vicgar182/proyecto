import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./home/Start";
import About from "./about/About";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Start} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default Routes;
