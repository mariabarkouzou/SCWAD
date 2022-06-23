import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import Animal from "./components/Animal";

const alanKey =
  "584dd321d19d6f27aa0a376cc296c3662e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Switch>
          <Route path="/WildAnimal">
            <Animal typeOfAnimal="animals" />
          </Route>
          <Route path="/Cat">
            <Animal typeOfAnimal="cat" />
          </Route>
          <Route path="/Dog">
            <Animal typeOfAnimal="dog" />
          </Route>
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
