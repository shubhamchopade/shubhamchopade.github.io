import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Skills from "./pages/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
