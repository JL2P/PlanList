import React from "react";
import axios from "axios";
import { Header } from "semantic-ui-react";
import AccountAddModel from "../../Api/model/AccountAddModel";

const Loading = ({ match }) => {
  if (match.params.token) {
    const token = match.params.token;
    const url = `/api/auth/signin/kakao/${token}`;

    axios.post(url).then((res) => {
      const data = res.data;
      localStorage.jwt_token = data.access_token;

      const accountObj = {
        accountId: data.accountId,
        email: data.email,
        name: data.accountId,
        imgUrl:
          data.imgUrl !== "" && data.imgUrl !== undefined
            ? data.imgUrl
            : "/posts/img_pororo.jpg",
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
    });
  } else {
    alert("로그인 실패");
    window.location.href = "/signin";
  }
  return <Header>Loading</Header>;
};

export default Loading;
