import React , {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Cat from "./Cat";
import WildAnimal from "./WildAnimal";
import Dog from "./Dog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = "584dd321d19d6f27aa0a376cc296c3662e956eca572e1d8b807a3e2338fdd0dc/stage";


function App() {

  useEffect(() => {
    alanBtn({
      key: alanKey,
  } )
  } , [])

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
