import React, { Component } from 'react';
import GroupProfileView from '../View/GroupProfileView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailProfileContainer extends Component {
    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;

        const {
            getDetailGroup_open,
            detailGroup_memberLength,
            getGroups
        } = group

        const {loginAccount} = account;

        return (
            <div>
                <GroupProfileView 
                    groups={getGroups}
                    detailGroup_open={getDetailGroup_open}
                    onLogInUser={loginAccount}
                    detailGroup_memberLength={detailGroup_memberLength}
                />
            </div>
        );
    }
}

export default DetailProfileContainer;