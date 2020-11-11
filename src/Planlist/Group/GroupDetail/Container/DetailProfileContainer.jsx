import React, { Component } from 'react';
import GroupProfileView from '../View/GroupProfileView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailProfileContainer extends Component {

    //그룹 가입 신청
    onGroupJoin = (e,memberObj) => {
        console.log(memberObj)
        const { group } = this.props.Store;
        var result = window.confirm("정말로 그룹에 가입하시겠습니까?");
        if(result){
            group.confirm = false;
            group.manager = false;
            group.groupMember(memberObj)
            alert("그룹에 가입 신청 되셨습니다.")
        }
    }

    //그룹 탈퇴
    onMemberRemove = (groupId,memberId) => {
        const { group } = this.props.Store;
        var result = window.confirm("정말로 그룹을 탈퇴하시겠습니까?")
        if(result){
            group.memberRemove(groupId,memberId);
            alert("그룹에서 탈퇴하셨습니다.")
            this.props.history.push(`/groupmenu/`);
            
        }
    }

    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;

        const {
            getGroup,
            detailGroup_memberLength,
            getGroups,
            getDetailGroup_memberList,
            getConfirm,
            getManager
        } = group

        const {loginAccount} = account;

        return (
            <div>
                <GroupProfileView 
                    groups={getGroups}
                    group={getGroup}
                    onLogInUser={loginAccount}
                    detailGroup_memberLength={detailGroup_memberLength}
                    detailGroup_memberList ={getDetailGroup_memberList}
                    onGroupJoin={this.onGroupJoin}
                    memberConfirm={getConfirm}
                    memberManager={getManager}
                    onMemberRemove={this.onMemberRemove}
                />
            </div>
        );
    }
}

export default DetailProfileContainer;