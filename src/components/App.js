import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
import NotFound from "./NotFound";
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/teachers" component={() => <Teachers />} />
        <Route path="/about" render={() => <About title="About this site" />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
