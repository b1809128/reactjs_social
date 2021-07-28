import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Data/HomePage/Home.js";
import Services from "./components/Data/Services/Services";
import Header from "./components/Header/Header";
import './styles.css';
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" component={Services} />
      </Switch>
    </Router>
  );
};

export default App;
