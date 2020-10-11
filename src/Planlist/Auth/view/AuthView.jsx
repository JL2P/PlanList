import React,{useEffect} from "react";
import AuthTemplate from "../../Sign/AuthTemplate";
import { Button, Checkbox, Form} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {sign_move_text} from "../../Sign/style/Btn";

const AuthView = ({
        onAuth,
        account,
        onUserRemove
    }) => {
    useEffect(() => {
        onAuth(account);
    })
    const sign_move = {padding:"0"}
  return (
    <div>
      <AuthTemplate name="AuthPage">
        <Form>
          <Form.Field>
            <label>e-mail</label>
            <input type="email" placeholder="planList@gmail.com" required value={account.email} readOnly/>
          </Form.Field>
          <Form.Field>
            <label>Nickname</label>
            <input
              type="text"
              placeholder="Please enter your Nickname"
              required
              value={account.accountId}
              readOnly
            />
          </Form.Field>
          <Form.Field>
            <label>User Name</label>
            <input placeholder="Please enter your User Name" required value={account.name} readOnly/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Please enter your password"
              required
              value={account.password}
              readOnly
            />
          </Form.Field>
          <Form.Field>
            <label>date of birth</label>
            <input type="date" required value={account.birth} readOnly />
          </Form.Field>
          <Button color="yellow" style={sign_move}>
          <Link to="signin" style={sign_move_text}>
            로그인페이지
          </Link>
        </Button>

        <Button color="yellow" style={sign_move}>
          <Link to="/" style={sign_move_text}>
            메인페이지
          </Link>
        </Button>

        <Button color="yellow" style={sign_move}>
          <Link to="/" style={sign_move_text}>
            수정
          </Link>
        </Button>

        <Button onClick={() => onUserRemove(account.accountId)} color="yellow" style={{color:"#000"}}>
            삭제
        </Button>
        </Form>
      </AuthTemplate>
      
    </div>
  );
};

export default AuthView;
