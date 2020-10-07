import React from "react";
import { Route } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage";
import TodosPage from "./Todos/TodosPage";

const AccountRouter = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.url}`} component={ProfilePage} />
      <Route exact path={`${match.url}/todos`} component={TodosPage} />
    </>
  );
};
export default AccountRouter;
