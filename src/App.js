import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import {
  Header,
  Footer,
  Main,
  Account,
  SignIn,
  SignUp,
  Auth,
  Todo,
} from "./Planlist/PlanlistRoutes";

const App = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/auth" &&(
        <Header />
      )}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/todo" component={Todo} />
        <Redirect path="*" to="/" />
      </Switch>
      {location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/auth" &&(
        <Footer />
      )}
    </>
  );
});

export default App;
