import React, { useState } from "react";
import AuthTemplate from "../../AuthTemplate";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Icon } from "semantic-ui-react";
import { sign_move_text, sign_IconBtn, sign_submitBtn } from "../../style/Btn";

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

  const sign_move = {
    float: "right",
    padding: "0",
    marginTop: "2rem",
  };

  return (
    <AuthTemplate name="Sign up">
      <Form>
        <div style={sign_IconBtn}>
          <Button color="facebook">
            <Icon name="facebook" />
            Sign Up with Facebook
          </Button>
          <Button color="google plus">
            <Icon name="google plus" />
            Sign Up with Google
          </Button>
        </div>
        <Form.Field>
          <label>e-mail</label>
          <input
            type="email"
            placeholder="planList@gmail.com"
            required
            value={email}
            onChange={onEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>Nickname</label>
          <input
            type="text"
            placeholder="Please enter your Nickname"
            required
            value={accountId}
            onChange={onAccountId}
          />
        </Form.Field>
        <Form.Field>
          <label>User Name</label>
          <input
            placeholder="Please enter your User Name"
            required
            value={name}
            onChange={onName}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Please enter your password"
            required
            value={password}
            onChange={onPassword}
          />
        </Form.Field>
        <Form.Field>
          <label>date of birth</label>
          <input type="date" required value={birth} onChange={onBirth} />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Plan List의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다." />
        </Form.Field>
        <Button
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
          Sign Up
        </Button>
        <Button color="yellow" style={sign_move}>
          <Link to="signin" style={sign_move_text}>
            Sign In Page
          </Link>
        </Button>
      </Form>
    </AuthTemplate>
  );
};

export default SignupView;
