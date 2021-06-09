import React from "react";
import Header from "./Header";
import Home from "./Home";
import Cat from "./Cat";
import WildAnimal from "./WildAnimal";
import Dog from "./Dog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/WildAnimal">
            <Header />
            <WildAnimal />
          </Route>
          <Route path="/Cat">
            <Header />
            <Cat />
          </Route>
          <Route path="/Dog">
            <Header />
            <Dog />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
