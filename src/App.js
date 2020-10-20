import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  Header,
  Footer,
  Main,
  Account,
  SignIn,
  SignUp,
  Auth,
  Todo,
  Group
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
        <Route path="/account" component={Account} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/group" component={Group} />
 
      </Switch>
      {location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/auth" &&(
        <Footer />
      )}
    </>
  );
});

export default App;
