import React, { Component } from 'react';
import GroupCenterView from '../View/GroupCenterView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailCenterlContainer extends Component {
    render() {
        const { group } = this.props.Store;
        const my_sampleData = group.getMyTodo;
        return (
            <div>
                <GroupCenterView sampleData={my_sampleData} />
            </div>
        );
    }
}

export default DetailCenterlContainer;