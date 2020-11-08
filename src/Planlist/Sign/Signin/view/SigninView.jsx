import React, { useState } from "react";
import AuthTemplate from "../../AuthTemplate";
import { Link } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";
import { sign_submitBtn, sign_btn_text } from "../../style/Btn";

import "./signinStyle.css";

const SigninView = ({ onSignin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmail = (e) => setEmail(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);

  const sign_forgetPassword = {
    display: "block",
    color: "#000000",
    textDecoration: "underline",
    textUnderlinePosition: "under",
    fontWeight: "bold",
  };
  return (
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
        <b style={{ ...sign_btn_text, marginTop: "5px" }}>or</b>
        <Button color="facebook" style={sign_submitBtn}>
          <Icon name="facebook" size="large" />
          <b style={sign_btn_text}>Continue with Facebook</b>
        </Button>
        <Button color="google plus" style={sign_submitBtn}>
          <Icon name="google plus" size="large" />
          <b style={sign_btn_text}>Continue with Google</b>
        </Button>

        <Link to="signup">
          <b style={{ ...sign_btn_text, marginTop: "25px", color: "black" }}>
            Sign Up Page
          </b>
        </Link>
      </Form>
    </AuthTemplate>
  );
};

export default SigninView;
