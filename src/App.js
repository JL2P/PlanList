import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  Header,
  Footer,
  Main,
  MainSearchPage,
  Account,
  SignIn,
  SignUp,
  Auth,
  GroupMenu,
  GroupDetail,
  GroupCategory,
  Ranking,
} from "./Planlist/PlanlistRoutes";
import PageNotFound from "./Planlist/PageNotFound/PageNotFound";
import Loading from './Planlist/Sign/Signin/Loading';

const App = withRouter(({ match, location }) => {
  return (
    <>
      {location.pathname !== "/signin" &&
        location.pathname !== "/signup" &&
        location.pathname !== `/signin/${location.pathname.split("/")[2]}` &&
        location.pathname !== "/auth" && <Header />}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={MainSearchPage} />
        <Route exact path="/signin/:token" component={Loading} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route exact path="/auth" component={Auth} />
        {/* <Route exact path="/todo" component={Todo} /> */}
        <Route path="/groupmenu" component={GroupMenu} />
        <Route path="/groupdetail/:id" component={GroupDetail} />
        <Route path="/groupcategory" component={GroupCategory} />
        <Route path="/ranking" component={Ranking} />
        <Route render={() => <PageNotFound />} />
      </Switch>
      {location.pathname !== "/signin" &&
        location.pathname !== "/signup" &&
        location.pathname !== `/signin/${location.pathname.split('/')[2]}` &&
        location.pathname !== "/auth" && <Footer />}
    </>
  );
});

export default App;
