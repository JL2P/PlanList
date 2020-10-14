import React, { Component } from 'react';
import AuthView from '../view/AuthView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class AuthContainer extends Component {
    //로그인 유저 불러오기
    onAuth = (accountObj) => {
        const { account } = this.props.Store;
        account.auth(accountObj)
        if(account.logCheck == false){
            this.props.history.push('/signin');
            account.account = "";
        } 
    }
    //유저 제거
    onUserRemove = (e,accountId) => {
        e.preventDefault();
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
    onBtn_change = (e) => {
        e.preventDefault();
        const { account } = this.props.Store;
        account.btn_change();
    }

    onUserModify = (e,accountObj) => {
        e.preventDefault();
        const { account } = this.props.Store;
        account.userModify(accountObj);
        const returnValue = window.confirm("내용을 수정 하시겠습니까?")
            if(returnValue){
                console.log("내용 수정")
                account.userRemove(accountObj)
                alert("회원 정보가 변경되었습니다. 로그인 페이지로 이동합니다.")
                account.authModifymove = true;
                console.log(account.authModifymove);
                account.logCheck = false;
                this.props.history.push('/signin');
            }else{
                console.log("수정 취소")
            }
    }

    render() {
        console.log("render")
        const { account } = this.props.Store;
        
        return <AuthView 
            onAuth={this.onAuth} 
            getAccount={account.getAccount}
            onUserRemove={this.onUserRemove}
            onUserModify={this.onUserModify}
            onBtn_change={this.onBtn_change}
            authModifymove={account.getAuthModifymove}
        />
    }
}

export default AuthContainer;