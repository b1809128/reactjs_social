import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Data/HomePage/Home.js";
import Services from "./components/Data/Services/Services";
import Products from "./components/Data/Products/Products";
import About_Data from "./components/Data/About/About_Data";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles.css";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        <Route path="/Services" component={Services} />{" "}
        <Route path="/Products" component={Products} />{" "}
        <Route path="/About" component={About_Data} />{" "}
      </Switch>{" "}
      <Footer />
    </Router>
  );
};

export default App;
