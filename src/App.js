import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  Header,
  Main,
  Account,
  SignIn,
  SignUp,
} from "./Planlist/PlanlistRoutes";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
