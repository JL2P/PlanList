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
    

    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;
        const {
            getMyTodo,
            getDetailGroup_modalOpen,
            detailGroup_open,
            getDetailGroup_memberList
        } = group;
        const {loginAccount} = account;

        console.log(detailGroup_open)
        return (
            <div>
                <GroupCenterView 
                    sampleData={getMyTodo}
                    detailGroup={detailGroup_open}
                    getDetailGroup_modalOpen={getDetailGroup_modalOpen}
                    onDetailGroup_modalCheck={this.onDetailGroup_modalCheck}
                    onDetailGroup_create={this.onDetailGroup_create}
                    onSettingSave={this.onSettingSave}
                    onSettingRemove={this.onSettingRemove}
                    onLogInUser={loginAccount}
                    memberList={getDetailGroup_memberList}
                />
            </div>
        );
    }
}

export default DetailCenterlContainer;
