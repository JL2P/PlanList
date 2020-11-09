import React, { Component } from 'react';
import GroupProfileView from '../View/GroupProfileView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailProfileContainer extends Component {

    onGroupJoin = (e,memberObj) => {
        console.log(memberObj)
        const { group } = this.props.Store;
        group.confirm = false;
        group.manager = false;
        group.groupMember(memberObj)
    }

    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;

        const {
            getDetailGroup_open,
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
                    detailGroup_open={getDetailGroup_open}
                    onLogInUser={loginAccount}
                    detailGroup_memberLength={detailGroup_memberLength}
                    detailGroup_memberList ={getDetailGroup_memberList}
                    onGroupJoin={this.onGroupJoin}
                    memberConfirm={getConfirm}
                    memberManager={getManager}
                />
            </div>
        );
    }
}

export default DetailProfileContainer;