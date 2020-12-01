import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { DataGrid } from "@material-ui/data-grid";
import GroupRankingContainer from "../container/GroupRankingContainer";


@inject("Store")
@observer
class GroupRankingListContainer extends Component {
  componentDidMount() {
    const { group, groupPoint } = this.props.Store;

    groupPoint.groupsAllRankings();
    

    // groupPoint.getGroupsAllRankings();

  }

  createDataGridDataSet=(dataList)=>{

    return dataList.map((data,idx)=>{
      const id = idx+1;
      const groupName = data.groupModel.title ;
      const groupTotal =data.groupTotal;
      return {
        id:id,
        groupName:groupName,
        groupTotal:groupTotal
      }
    });
  }


  render() {
    const { group, groupPoint } = this.props.Store;
    const groupRankingList = groupPoint.getGroupRanks;
    console.log(groupRankingList);
    

    // const element = groupRankingList.map((groupRank, idx) => (
    //   <GroupRankingContainer 
    //    rows={rows} rankIdx = {idx+1} groupTitle={groupRank.groupModel.title} groupPointTotal={groupRank.groupTotal} 
    //   > </GroupRankingContainer>
    // ))
    console.log("랭킹",groupRankingList);
    const columns = [
      { field: 'id', headerName: '순위', width: 70 },
      { field: 'groupName', headerName: '그룹 명', width: 130 },
      { field: 'groupTotal', headerName: '그룹 점수', width: 130 },
    ];

    const rowss = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    

    return <div>
    <div style={{ height: 400, width: '750%' }}>
      <DataGrid rows={this.createDataGridDataSet(groupRankingList)} columns={columns}>
        </DataGrid>
      </div>
   </div>
  }
}

export default GroupRankingListContainer;
