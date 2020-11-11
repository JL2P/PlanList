import React, { Component } from 'react';
import GroupCenterView from '../View/GroupCenterView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailCenterlContainer extends Component {

    //그룹페이지에서 todo 생성
    onDetailGroup_create = (e,DetailGroupObj) => {
        e.preventDefault();
        const { group } = this.props.Store;
        group.detailGroup_create(DetailGroupObj);
    }
    //todo 생성후 모달 닫기
    onDetailGroup_modalCheck = (check) => {
        console.log(check)
        const { group } = this.props.Store;
        group.detailGroup_modalCheck(check);
    }
    //설정창 저장
    onSettingSave = (e,groupObj) => {
        e.preventDefault();
        const { group } = this.props.Store;
        group.settingSave(groupObj);
        window.location.href = "/groupmenu";
    }
    //설정창에서 그룹 제거
    onSettingRemove = (e,groupId) => {
        e.preventDefault();
        const { group } = this.props.Store;
        group.settingRemove(groupId);
        window.location.href = "/groupmenu";
    }
    //멤버 그룹 가입 신청
    onMemberApply = (e,memberObj) => {
        e.preventDefault();
        console.log(memberObj)
        const { group } = this.props.Store;
        group.memberApply(memberObj);
    }
    

    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;
        const {
            getMyTodo,
            getDetailGroup_modalOpen,
            getGroup,
            getDetailGroup_memberList,
            member
        } = group;
        const {loginAccount} = account;

        return (
            <div>
                <GroupCenterView 
                    sampleData={getMyTodo}
                    group={getGroup}
                    getDetailGroup_modalOpen={getDetailGroup_modalOpen}
                    onDetailGroup_modalCheck={this.onDetailGroup_modalCheck}
                    onDetailGroup_create={this.onDetailGroup_create}
                    onSettingSave={this.onSettingSave}
                    onSettingRemove={this.onSettingRemove}
                    onLogInUser={loginAccount}
                    memberList={getDetailGroup_memberList}
                    onMemberApply={this.onMemberApply}
                    member={member}
                />
            </div>
        );
    }
}

export default DetailCenterlContainer;
