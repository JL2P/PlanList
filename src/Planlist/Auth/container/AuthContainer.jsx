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
            const returnValue = window.confirm("정말로 삭제하겠습니까?")
            if(returnValue){
                console.log("아이디 삭제")
                account.userRemove(accountId)
                alert("아이디가 삭제되었습니다.")
                this.props.history.push('/signin');
            }else{
                console.log("삭제 취소")
            }
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