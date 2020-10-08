import React from "react";
import { Route, Switch, Redirect,withRouter } from "react-router-dom";
import { Header, Footer, Main, Account, SignIn, SignUp, Todo } from "./Planlist/PlanlistRoutes";

const App = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/signin" && <Header />}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route path="/todo" component={Todo} />
        <Redirect path="*" to="/" />
      </Switch>
      {location.pathname !== "/signin" && <Footer />}
    </>
  );
});

export default App;
