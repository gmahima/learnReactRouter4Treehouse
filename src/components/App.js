import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

import AboutP1 from "./AboutP1";
import Courses from "./Courses";
import Teachers from "./Teachers";
import Featured from "./Featured";
import NotFound from "./NotFound";
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:course/:name" component={Featured} />
        <Route path="/about" component={AboutP1} />
        <Route render={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
