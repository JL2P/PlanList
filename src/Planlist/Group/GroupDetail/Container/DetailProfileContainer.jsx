import React, { Component } from 'react';
import GroupProfile from '../View/GroupProfileView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailProfileContainer extends Component {
    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;
        const my_sampleData = group.getMyTodo;

        const {
            getDetailGroup_open,
        } = group

        const {loginAccount} = account;
        return (
            <div>
                <GroupProfile 
                    sampleData={my_sampleData}
                    detailGroup_open={getDetailGroup_open}
                    onLogInUser={loginAccount}
                />
            </div>
        );
    }
}

export default DetailProfileContainer;