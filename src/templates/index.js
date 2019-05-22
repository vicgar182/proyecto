import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./home/Start";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Portafolio from "./portafolio/Portafolio";
import Blog from "./blog/Blog";
import Other_Pages from "./other_pages/Other_Pages";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Start} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portafolio" component={Portafolio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/other_pages" component={Other_Pages} />
    </div>
  </Router>
);

export default Routes;
