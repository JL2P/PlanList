import React, { Component } from 'react';
import AuthView from '../view/AuthView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class AuthContainer extends Component {
    
    onAuth = (accountObj) => {
        const { account } = this.props.Store;
        account.auth(accountObj)
        if(account.logCheck == false){
            this.props.history.push('/signin');
        } 
    }
    onUserRemove = (accountId) => {
        const { account } = this.props.Store;
        account.userRemove(accountId)
    }
    render() {
        const { account } = this.props.Store;
        return <AuthView 
            onAuth={this.onAuth} 
            account={account.account}
            onUserRemove={this.onUserRemove}
            />
    }
}

export default AuthContainer;