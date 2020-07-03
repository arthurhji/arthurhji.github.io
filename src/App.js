import React, { Component } from "react";
import "./App.css";

import Home from "./components/pages/Home.js";
import AboutMe from "./components/pages/AboutMe.js";
import Career from "./components/pages/Career.js";
import CurrentPastWork from "./components/pages/CurrentPastWork.js";

import HomeBar from "./components/HomeBar.js";
import BottomBar from "./components/BottomBar.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <main style={{ display: "flex", flexDirection: "column-reverse" }}>
        <BottomBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutMe} />
          <Route path="/work" component={CurrentPastWork} />
          <Route path="/career" component={Career} />
          <Route component={Error} />
        </Switch>
        <HomeBar openMenu={false} />
      </main>
    );
  }
}
