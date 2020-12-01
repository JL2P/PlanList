import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import GroupRankingListView from "../view/GroupRankingListView";

@inject("Store")
@observer
class GroupRankingContainer extends Component {
   
    componentDidMount() {
        const { rows } = this.props;
        const { group, groupPoint } = this.props.Store;
    }
    
    render() {
        const { rows, rankIdx, groupTitle, groupPointTotal } = this.props;
        const {  groupPoint } = this.props.Store;
        
        return (
            <div>
                <GroupRankingListView 
                 rows={rows} 
                 rankIdx = {rankIdx} 
                 groupTitle={groupTitle} 
                 groupPointTotal={groupPointTotal} 
                 ></GroupRankingListView>
            </div>
        );
    }
}

export default GroupRankingContainer;