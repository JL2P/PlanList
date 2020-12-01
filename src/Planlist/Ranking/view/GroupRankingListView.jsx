import * as React from 'react';
import { Container } from "semantic-ui-react"; 
// const columns = [
//     { field: 'id', headerName: '순위', width: 70 },
//     { field: 'groupName', headerName: '그룹 명', width: 130 },
//     { field: 'groupTotal', headerName: '그룹 점수', width: 130 },
//   ];
//  
  // const rows = [
  //   { id: 1, groupName: 'Snow'},
  //   { id: 2, groupName: 'Lannister'},
    
  // ];


  

const GroupRankingListView = ({ 
  rows, 
  rankIdx, 
  groupTitle, 
  groupPointTotal, 
  children 
}) => {
  // const groupRank = {id: {rankIdx}, groupTitle:{groupTitle}, groupPointTotal:{groupPointTotal}};
  // rows.concat(groupRank);
  
    return (
    
    <div>
      {children}
      <Container>
        
        



      </Container>
   
    </div>
        
    );
};

export default GroupRankingListView;