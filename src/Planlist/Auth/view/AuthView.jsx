import React,{useState,useEffect} from "react";
import AuthTemplate from "../../Sign/AuthTemplate";
import { Button, Checkbox, Form} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {sign_move_text} from "../../Sign/style/Btn";

const AuthView = ({
        onAuth,
        getAccount,
        onUserRemove,
        onUserModify,
        onBtn_change,
        authModifymove
    }) => {

      const accountId = getAccount.accountId
      const email = getAccount.email;
      const [password, setPassword] = useState(getAccount.password);
      const [name, setName] = useState(getAccount.name);
      const [birth, setBirth] = useState(getAccount.birth);

      const onPassword = (e) => setPassword(e.target.value);
      const onName = (e) => setName(e.target.value);
      const onBirth = (e) => setBirth(e.target.value);

  useEffect(() => {
      onAuth(getAccount);
  })
    
  const sign_move = {padding:"0"}
  console.log("authModifymove : "+authModifymove)
  const authComponent = authModifymove ? (
    <Form>
      <Form.Field>
        <label>e-mail</label>
        <input 
          type="email" 
          placeholder="planList@gmail.com" 
          required 
          value={getAccount.email} readOnly/>
      </Form.Field>
      <Form.Field>
        <label>Nickname</label>
        <input
          type="text"
          placeholder="Please enter your Nickname"
          required
          value={getAccount.accountId}
          readOnly
        />
      </Form.Field>
      <Form.Field>
        <label>User Name</label>
        <input placeholder="Please enter your User Name" required value={getAccount.name} readOnly/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          type="password"
          placeholder="Please enter your password"
          required
          value={getAccount.password}
          readOnly
        />
      </Form.Field>
      <Form.Field>
        <label>date of birth</label>
        <input type="date" required value={getAccount.birth} readOnly />
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
      <Button onClick={(e) => onBtn_change(e)} color="yellow" style={{color:"#000"}}>
        수정
      </Button>
      <Button onClick={() => onUserRemove(getAccount.accountId)} color="yellow" style={{color:"#000"}}>
        삭제
      </Button>
    </Form>
  )
    : (
      <Form>
      <Form.Field>
        <label>e-mail</label>
        <input 
          type="email" 
          placeholder="planList@gmail.com" 
          required 
          value={getAccount.email} readOnly/>
      </Form.Field>
      <Form.Field>
        <label>Nickname</label>
        <input
          type="text"
          placeholder="Please enter your Nickname"
          required
          value={getAccount.accountId}
          readOnly
        />
      </Form.Field>
      <Form.Field>
        <label>User Name</label>
        <input 
          placeholder="Please enter your User Name" 
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
      <Button onClick={(e) => onUserModify(e,{name,password,birth,accountId,email})} color="yellow" style={{color:"#000"}}>
        수정완료
      </Button>
    </Form>
  )

  return (
    <div>
      <AuthTemplate name="AuthPage">
        
          {authComponent}
        
      </AuthTemplate>
      
    </div>
  );
};

export default AuthView;
