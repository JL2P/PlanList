import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { DataGrid } from "@material-ui/data-grid";


@inject("Store")
@observer
class GroupRankingListContainer extends Component {
  componentDidMount() {
    const { group, groupPoint } = this.props.Store;

    groupPoint.groupsAllRankings();
    

    // groupPoint.getGroupsAllRankings();

  }

  render() {
    const { group, groupPoint } = this.props.Store;
    const groupRankingList = groupPoint.getGroupRanks;
    console.log("랭킹",groupRankingList);

    return <div></div>;
  }
}

export default GroupRankingListContainer;
