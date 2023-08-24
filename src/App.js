import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import CheckOut from "./CheckOut";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <CheckOut />
        </Route>
        <Route path="/">
          <Header />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
