import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Songs from "./pages/Songs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/songs' component={Songs} />
      </Switch>
    </div>
  );
}

export default App;
