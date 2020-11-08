import React, { useState } from "react";
import SigninPage from "./Signin/SigninPage";
import SignupPage from "./Signup/SignupPage";

const SignPage = () => {
  const [look, setLook] = useState(true);

  const onRegister = () => {
    setLook(false);
  };
  return look === true ? (
    <SigninPage onRegister={onRegister} />
  ) : (
    <SignupPage />
  );
};

export default SignPage;
