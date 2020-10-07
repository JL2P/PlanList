import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  Header,
  Main,
  Account,
  SignIn,
  SignUp,
  Todo,
} from "./Planlist/PlanlistRoutes";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Main} />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route path="/todo" component={Todo} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
