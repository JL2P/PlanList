import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import {
  Header,
  Footer,
  Main,
  Account,
  SignIn,
  SignUp,
  Todo,
} from "./Planlist/PlanlistRoutes";

const App = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Header />
      )}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route exact path="/todo" component={Todo} />
 
      </Switch>
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </>
  );
});

export default App;
