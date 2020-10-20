import React, { Component } from 'react';
import MyGroupView from '../View/MyGroupView';
import { inject, observer } from "mobx-react";


@inject("Store")
@observer
class GroupContainer extends Component {

    render() {
        const { group } = this.props.Store;
        const sampleData = group.getMyTodo;
        return (
            <div>
                <MyGroupView sampleData={sampleData}/>
            </div>
        );
    }
}

export default GroupContainer;