import React from "react";
import SigninContainer from "./container/SigninContainer";
import { inject, observer } from "mobx-react";
const SigninPage = ({ history }) => {
  return <SigninContainer history={history} />;
};

export default inject("Store")(observer(SigninPage));
