import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Admission from "./Components/Admission";
import Contact from "./Components/Contact";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Notice from "./Components/Notice";
import Admin from "./Components/Admin";

const App = () => {
  return (
    <div className="container-fluid App">
      <Sidebar />
      {/* <Header /> */}
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/admission">
          <Admission />
        </Route>
        <Route path="/notice">
          <Notice />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
