import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default App;
