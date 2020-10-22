import React, { Component } from 'react';
import GroupProfile from '../View/GroupProfileView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailProfileContainer extends Component {
    render() {
        const { group } = this.props.Store;
        const my_sampleData = group.getMyTodo;
        return (
            <div>
                <GroupProfile sampleData={my_sampleData} />
            </div>
        );
    }
}

export default DetailProfileContainer;