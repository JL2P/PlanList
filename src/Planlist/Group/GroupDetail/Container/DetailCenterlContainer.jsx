import React, { Component } from 'react';
import GroupCenterView from '../View/GroupCenterView';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailCenterlContainer extends Component {

    onDetailGroup_create = (e,DetailGroupObj) => {
        e.preventDefault();
        const { group } = this.props.Store;
        group.detailGroup_create(DetailGroupObj);
    }

    onDetailGroup_modalCheck = (check) => {
        console.log(check)
        const { group } = this.props.Store;
        group.detailGroup_modalCheck(check);
    }
    

    render() {
        const { group } = this.props.Store;
        const {getMyTodo,getDetailGroup_modalOpen} = group;
        return (
            <div>
                <GroupCenterView 
                    sampleData={getMyTodo}
                    getDetailGroup_modalOpen={getDetailGroup_modalOpen}
                    onDetailGroup_modalCheck={this.onDetailGroup_modalCheck}
                    onDetailGroup_create={this.onDetailGroup_create} 
                />
            </div>
        );
    }
}

export default DetailCenterlContainer;
