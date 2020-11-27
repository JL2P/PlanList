import React, { useState } from "react";
import AuthTemplate from "../../AuthTemplate";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { sign_btn_text, sign_submitBtn } from "../../style/Btn";

const SignupView = ({ onSignup }) => {
  //승훈 추가 나중에 주석은 지워도되요!
  //입력받기위한 state생성
  const [accountId, setAccountId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const onAccountId = (e) => setAccountId(e.target.value);
  const onEmail = (e) => setEmail(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);
  const onName = (e) => setName(e.target.value);
  const onBirth = (e) => setBirth(e.target.value);

  // const sign_move = {
  //   float: "right",
  //   padding: "0",
  //   marginTop: "2rem",
  // };

  return (
    <AuthTemplate name="Sign up">
      <Form>
        <Form.Field>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onPassword}
          />
        </Form.Field>
        <Form.Field>
          <label>NickName</label>
          <input
            type="text"
            placeholder="NickName"
            required
            value={accountId}
            onChange={onAccountId}
          />
        </Form.Field>
        <Form.Field>
          <label>UserName</label>
          <input placeholder="Name" required value={name} onChange={onName} />
        </Form.Field>

        <Form.Field>
          <label>Birth</label>
          <input type="date" required value={birth} onChange={onBirth} />
        </Form.Field>

        <Button
          color="yellow"
          type="submit"
          style={sign_submitBtn}
          onClick={(e) => {
            onSignup(e, {
              accountId,
              email,
              password,
              name,
              birth,
            });
          }}
        >
          <b style={sign_btn_text}>Sign Up</b>
        </Button>
        <Link to="signin">
          <b style={{ ...sign_btn_text, marginTop: "25px", color: "black" }}>
            Sign In Page
          </b>
        </Link>
      </Form>
    </AuthTemplate>
  );
};

export default SignupView;
