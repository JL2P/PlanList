import React from "react";
import SigninContainer from "./container/SigninContainer";
import { inject, observer } from "mobx-react";
import AccountAddModel from "../../Api/model/AccountAddModel";
import axios from "axios";

const SigninPage = ({ Store, match, history }) => {
  if (match.params.email) {
    const { account } = Store;

    let accountObj = { email: match.params.email, password: "planit" };
    account.signin(accountObj).then((req) => {
      if (localStorage.getItem("jwt_token")) {
        // this.props.history.push("/");
        accountObj = {
          accountId: match.params.email.split("@")[0],
          email: match.params.email,
          name: match.params.email.split("@")[0],
        };

        const accountModel = new AccountAddModel(accountObj);
        const HEADER = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        };
        axios.post("/api/accounts", accountModel, HEADER).then((res) => {
          window.location.href = "/";
        });
      }
    });
    console.log("test");
  }

  return <SigninContainer history={history} />;
};

export default inject("Store")(observer(SigninPage));
