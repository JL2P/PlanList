import React from "react";
import AuthTemplate from "../../AuthTemplate";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Icon } from "semantic-ui-react";
import { 
    sign_move_text, 
    sign_IconBtn ,
    sign_submitBtn 
} from "../../style/Btn";

const SigninView = () => {
  const sign_move = {
    float: "right",
    padding: "0",
  };
  const sign_forgetPassword = {
    display: "block",
    margin: "1rem 0",
    textAlign: "center",
    color: "#000000",
    textDecoration: "underline",
    textUnderlinePosition: "under",
    fontWeight: "bold",
  };
  return (
    <AuthTemplate name = "Log In">
      <Form>
        <div style={sign_IconBtn}>
          <Button color="facebook">
            <Icon name="facebook" />
            Log in with Facebook
          </Button>
          <Button color="google plus">
            <Icon name="google plus" />
            Log in with Google
          </Button>
        </div>

        <Form.Field>
          <label>e-mail</label>
          <input type="email" placeholder="Please enter a e-mail" required />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Please enter a password"
            required
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" style={sign_submitBtn}>
          Log In
        </Button>
        <Link to="/" style={sign_forgetPassword}>
          Forgot Password?
        </Link>
        <Button color="yellow" style={sign_move}>
          <Link to="signup" style={sign_move_text}>
            Sign Up Page
          </Link>
        </Button>
      </Form>
    </AuthTemplate>
  );
};

export default SigninView;
