import React from "react";
import { Route } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage";
import TodosPage from "./Todos/TodosPage";
// import ModifyPage from "./ProfileModify/ProfileModifyPage";

const AccountRouter = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.url}/`} component={ProfilePage} />
      <Route exact path={`${match.url}/:id`} component={ProfilePage} />
      <Route exact path={`${match.url}/todos`} component={TodosPage} />
      {/* <Route exact path={`${match.url}/modify`} component={ModifyPage} /> */}
    </>
  );
};
export default AccountRouter;
