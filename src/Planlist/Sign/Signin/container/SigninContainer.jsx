import React, { Component } from 'react';
import SigninView from "../view/SigninView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class SigninContainer extends Component {

    onSignin = (e, accountObj) =>{
        e.preventDefault();
        console.log(accountObj)
        const { account } = this.props.Store;
        account.signin(accountObj);
    }

    render() {
        return <SigninView  onSignin={this.onSignin}/>
    }
}

export default SigninContainer;
