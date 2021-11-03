import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Custmize from "./components/Custmization";
import Checkout from "./components/Checkout";

function App() {
  const [ingredients, setIngredients] = useState({
    base: false,
    basil: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    cheese: false,
    tomato: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if(data){
        setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Custmize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
