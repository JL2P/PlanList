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
  GroupMenu,
  GroupDetail,
  GroupCategory,
  Ranking,
} from "./Planlist/PlanlistRoutes";

const App = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/signin" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/auth" && <Header />}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route exact path="/auth" component={Auth} />
        {/* <Route exact path="/todo" component={Todo} /> */}
        <Route path="/groupmenu" component={GroupMenu} />
        <Route path="/groupdetail" component={GroupDetail} />
        <Route path="/groupcategory" component={GroupCategory} />
        {/* <Route path="/chat/" exact component={JoinRoom} /> */}
        {/* <Route path="/chat/chat" component={Chat} /> */}
        {/* <Route path="/chat" component={Chat_test} /> */}
        <Route path="/ranking" component={Ranking} />
      </Switch>
      {location.pathname !== "/signin" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/auth" && <Footer />}
    </>
  );
});

export default App;
