import React, { useState } from "react";
import AuthTemplate from "../../AuthTemplate";
import { Link } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";
import { sign_submitBtn, sign_btn_text } from "../../style/Btn";
import MainBackgroundView from "../../../Main/View/MainBackgroundView";

import "./signinStyle.css";
import axios from "axios";

const SigninView = ({ onSignin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmail = (e) => setEmail(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);

  const header = {
    headers: {
      "Access-Control-Allow-Origin":
        "http://localhost:9000/oauth2/authorization/google",
    },
  };

  const onGoogleLogin = () => {
    const url = "/api/auth/signin/google";
    const url2 = "http://localhost:9000/oauth2/authorization/google";
    window.location.href = url2;
  };

  const sign_forgetPassword = {
    display: "block",
    color: "#000000",
    textDecoration: "underline",
    textUnderlinePosition: "under",
    fontWeight: "bold",
  };
  return (
    <div className="MainBox">
      <div className="SubMainBox"></div>
      <MainBackgroundView type={"sign"} />
      <AuthTemplate name="Log In">
        <Form
          className="LoginForm"
          onSubmit={(e) => {
            onSignin(e, { email, password });
          }}
        >
          <Form.Field>
            <input
              onChange={onEmail}
              type="email"
              placeholder="Email"
              required
              value={email}
              style={{ height: "60px" }}
            />
          </Form.Field>
          <Form.Field>
            <input
              onChange={onPassword}
              type="password"
              placeholder="Password"
              required
              value={password}
              style={{ height: "60px" }}
            />
          </Form.Field>
          <Link to="/" style={sign_forgetPassword}>
            Forgot your Password?
          </Link>
          <Button color="yellow" style={sign_submitBtn}>
            <b style={sign_btn_text}>Log In</b>
          </Button>
        </Form>
        <b style={{ ...sign_btn_text, marginTop: "5px" }}>or</b>
        <Button color="facebook" style={sign_submitBtn}>
          <Icon name="facebook" size="large" />
          <b style={sign_btn_text}>Continue with Facebook</b>
        </Button>
        <Button
          color="google plus"
          style={sign_submitBtn}
          onClick={() => onGoogleLogin()}
        >
          <Icon name="google plus" size="large" />
          <b style={sign_btn_text}>Continue with Google</b>
        </Button>

        <Link to="signup">
          <b style={{ ...sign_btn_text, marginTop: "25px", color: "black" }}>
            Sign Up Page
          </b>
        </Link>
      </AuthTemplate>
    </div>
  );
};

export default SigninView;
