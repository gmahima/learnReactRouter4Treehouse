import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" render={() => <Home />} />
      <Route path="/courses" render={() => <Courses />} />
      <Route path="/teachers" component={() => <Teachers />} />
      <Route path="/about" render={() => <About title="About this site" />} />
    </div>
  </BrowserRouter>
);

export default App;
