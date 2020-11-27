import React, { Component } from 'react';
import { inject, Observer, observer } from "mobx-react";
import { DataGrid } from '@material-ui/data-grid';
import {GroupRankingListView} from "../view/GroupRankingListView";


@inject("Store")
@observer
class GroupRankingListContainer extends Component {
    
    componentDidMount(){
        const {group, groupPoint} = this.props.Store;
        groupPoint.getGroupsAllRankings();
    }

    render() {
        const { group, groupPoint } = this.props.Store;
    

      
        return (
            <div>
                
            </div>
        );
    }
}

export default GroupRankingListContainer;