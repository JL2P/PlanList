import React from "react";
import { Route } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";
import TodosPage from "./TodosPage/TodosPage";

const AccountRouter = ({ match }) => {
  return (
    <>
      <Route path={`${match.url}/profile`} component={ProfilePage} />
      <Route path={`${match.url}/todos`} component={TodosPage} />
    </>
  );
};
export default AccountRouter;
