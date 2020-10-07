import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  Header,
  Main,
  Account,
  SignIn,
  Todo,
} from "./Planlist/PlanlistRoutes";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Header />
        <Route path="/account" component={Account} />
        <Route path="/todo" component={Todo} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
