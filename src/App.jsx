import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Success from "./components/Success";
import OrderPizza from "./components/OrderPizza";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/orderPizza" component={OrderPizza} />
      <Route path="/success" component={Success} />
    </Switch>
    // <>
    //   <Footer />
    // </>
  );
}

export default App;
