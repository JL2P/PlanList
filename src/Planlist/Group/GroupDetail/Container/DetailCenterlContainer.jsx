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
    //설정 수정 저장
    onSettingSave = (e,groupObj) => {
        e.preventDefault();
        const { group } = this.props.Store;
        var result = window.confirm("수정 사항을 저장하시겠습니까?")
        if(result){
            group.settingSave(groupObj);
            alert("수정 사항이 반영되었습니다.")
            window.location.reload();
        }
        
        
    }
    //설정창에서 그룹 제거
    onSettingRemove = (e,groupId) => {
        e.preventDefault();
        const { group } = this.props.Store;
        var result = window.confirm("그룹을 정말 삭제하시겠습니까?")
        if(result){
            group.settingRemove(groupId);
            alert("그룹이 삭제되었습니다.")
            window.location.href = "/groupmenu";
        }
    }
    //멤버 그룹 가입 신청
    onMemberApply = (e,memberObj) => {
        e.preventDefault();
        console.log(memberObj)
        const { group } = this.props.Store;
        var result = window.confirm("가입 신청을 허용하시겠습니까?")
        if(result){
            group.memberApply(memberObj);
            alert("사용자가 그룹원이 되었습니다.")
            window.location.reload();
        }
    }
    //그룹 가입신청 취소 & 강퇴
    onMemberRemove = (groupId,memberId) => {
        const { group } = this.props.Store;
        var result = window.confirm("해당 사용자를 그룹에서 강퇴하시겠습니까?")
        if(result){
            group.memberRemove(groupId,memberId);
            // this.props.history.push(`/groupdetail/${groupId}/member`);
            alert("사용자를 그룹에서 강퇴퇴하셨습니다.")
            window.location.reload();
        }
    }
    //사용자 그룹 탈퇴
    onMemberRemove_user = (groupId,memberId) => {
        const { group } = this.props.Store;
        var result = window.confirm("그룹에서 탈퇴하시겠습니까?")
        if(result){
            group.memberRemove(groupId,memberId);
            this.props.history.push(`/groupmenu`);
            alert("그룹에서 탈퇴하셨습니다.")
            window.location.reload();
        }
    }
    //그룹 디테일 내비게이션
    onHandleItemClick = (name) => {
        const { group } = this.props.Store;
        group.handleItemClick(name);
    }
    

    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;
        const {
            getMyTodo,
            getDetailGroup_modalOpen,
            getGroup,
            getDetailGroup_memberList,
            getMember,
            getActiveItem
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
                    member={getMember}
                    onMemberRemove={this.onMemberRemove}
                    onMemberRemove_user={this.onMemberRemove_user}
                    activeItem={getActiveItem}
                    onHandleItemClick={this.onHandleItemClick}
                />
            </div>
        );
    }
}

export default DetailCenterlContainer;
