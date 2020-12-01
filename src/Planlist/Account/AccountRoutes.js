import React from "react";
import { Route } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage";


const AccountRouter = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.url}/`} component={ProfilePage} />
      <Route exact path={`${match.url}/:id`} component={ProfilePage} />
    </>
  );
};
export default AccountRouter;
