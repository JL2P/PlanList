import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DetailChattingView from "../View/DetailChattingView";

@inject("Store")
@observer
class DetailChattingContainer extends Component {
  componentDidMount() {
    const groupId = this.props.groupId;
    const { groupPoint } = this.props.Store;
    groupPoint.getInGroupAllRankings(groupId);
  }

  groupAccountRankingDataSet = (members, points) => {
    const mb = members.slice().map((member) => {
      const memberPoints = points.filter(
        (point) => member.accountId === point.accountId
      );
      const result = memberPoints.reduce(function add(sum, point) {
        return sum + point.point;
      }, 0);

      return {
        accountId: member.accountId,
        total: result,
      };
    });
    mb.sort(function (a, b) {
      return a.total > b.total ? -1 : a.total < b.total ? 1 : 0;
    });

    return mb;
  };

  render() {
    const { group, groupPoint } = this.props.Store;
    const {getDetailGroup_memberList} = group
    const groupMembers = group.getGroup.members;
    const groupRanks = groupPoint.getInGroupRanks();

    return (
      <div>
        <DetailChattingView
          members ={getDetailGroup_memberList}
          groupRanks={
            groupMembers !== undefined && groupRanks !== undefined
              ? this.groupAccountRankingDataSet(groupMembers, groupRanks)
              : []
          }
        />
      </div>
    );
  }
}

export default DetailChattingContainer;
