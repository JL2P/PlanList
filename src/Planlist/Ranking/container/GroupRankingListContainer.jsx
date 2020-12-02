import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { DataGrid } from "@material-ui/data-grid";
import {Container, Image } from "semantic-ui-react"; 


@inject("Store")
@observer
class GroupRankingListContainer extends Component {
  componentDidMount() {
    const { group, groupPoint } = this.props.Store;

    groupPoint.groupsAllRankings();
    

    // groupPoint.getGroupsAllRankings();

  }

  //
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
      { field: 'id', headerName: '순위', width: 280 },
      { field: 'groupName', headerName: '그룹 명', width: 280},
      { field: 'groupTotal', headerName: '그룹 점수', width: 280 }
    ];
    return (<div >
      <Container style={{ width: "900px", marginTop: "5em" }}>
    
        <h3 style={{ textAlign: "center" }}>
        <Image
            // href="/"
            src="/images/logo/logo2.png"
            size="tiny"
            verticalAlign="bottom"
          />
          전체 그룹의 랭킹을 확인해 보세요.
        </h3>
      
          <div style={{ height: 400, width: '900px' }}>
          <DataGrid  style={{ marginTop: "30px" }} rows={this.createDataGridDataSet(groupRankingList)} columns={columns}
          pageSize={10}>
        </DataGrid> </div>
      
      </Container>

   </div>)
  }
}

export default GroupRankingListContainer;
