import React, {useState} from 'react';
import AuthTemplate from './AuthTemplate';
import SigninPage from "./Signin/SigninPage";
import SignupPage from "./Signup/SignupPage";

const SignPage = () => {
    const [look, setLook] = useState(true);
    console.log(look)

    const onRegister = () =>{
        setLook(false)
    }
    return (
        <AuthTemplate>
            {look == true ? <SigninPage onRegister={onRegister}/> : <SignupPage />}
        </AuthTemplate>
    );
};

export default SignPage;