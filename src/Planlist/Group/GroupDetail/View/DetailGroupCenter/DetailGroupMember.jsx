import React from "react";
import { Segment, Card, Feed, Button } from "semantic-ui-react";

const DetailGroupMember = ({
    group, 
    memberList,
    onMemberApply,
    onMemberRemove,
    member
  }) => {
  
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일

    const newToday = `${year}.${month}.${date}`

  //그룹 가입 신청 List
  const membersApply = memberList.map((member,index) => (
    member.confirm === "false" ? (
      
        <Feed.Event key ={index} style={{
          display:"flex", 
          alignItems:"center",
          borderBottom:"1px dotted #d9d9d9",
          padding:"0.6rem 0"
        }}>
          <Feed.Label image="/posts/test_img_1.jpg" />
          <Feed.Content>
            <Feed.Date content={member.accountId} style={{fontSize:"1.2rem"}}/>
              <Feed.Summary>
                <small>가입 신청일 : {member.date}</small> 
            </Feed.Summary>
          </Feed.Content>
          <form>
            <Button size="tiny" basic color='blue' onClick={(e) => onMemberApply(e,{
                id:`${member.id}`,
                accountId:`${member.accountId}`,
                confirm:"true",
                manager:`${member.manager}`,
                groupId:`${member.groupId}`,
                date:`${newToday}`
            })}>
                확인
            </Button>
            <Button size="tiny" basic color='red' style={{marginLeft:"0.5rem"}} onClick={() => onMemberRemove(group.id,member.id)}>
                취소
            </Button>
          </form>
        </Feed.Event>
    ) : ""
  ))

  //멤버 List
  const membersList = memberList.map((member_map,index) => (
      member_map.confirm === "true" ? (
        <Feed.Event key ={index} style={{
          display:"flex", 
          alignItems:"center",
          borderBottom:"1px dotted #d9d9d9",
          padding:"0.6rem 0"
        }}>
          <Feed.Label image="/posts/test_img_1.jpg" />
          <Feed.Content>
            <Feed.Date content={member_map.accountId} style={{fontSize:"1.2rem"}}/>
            <Feed.Summary>
              <small>그룹 가입일 : {member.date}</small> 
            </Feed.Summary>
          </Feed.Content>
          { member_map.manager === "false" ?
            <div>
              <Button size="tiny" basic color='red' onClick={() => onMemberRemove(group.id,member_map.id)}>
                  그룹 강퇴
              </Button>
            </div>
            :
            <div>
              <Button size="tiny" basic color='blue'>
                  그룹장
              </Button>
            </div>
          }
        </Feed.Event>
      ) : ""
  ))

  return (
    <div>
      {member.manager === "true" &&
        <Segment>
          <Card style={{width:"100%"}}>
            <Card.Content>
              <Card.Header style={{margin:"0", fontSize:"1.1rem"}}>그룹 가입 신청 List</Card.Header>
            </Card.Content>

            <Card.Content style={{paddingTop:"0"}}>
              <Feed>
                {membersApply}
              </Feed>
            </Card.Content>
          </Card>
        </Segment>
      }
      
      <Segment>
        <Card style={{width:"100%"}}>
          <Card.Content>
            <Card.Header style={{margin:"0", fontSize:"1.1rem"}}>멤버 List</Card.Header>
          </Card.Content>

          <Card.Content style={{paddingTop:"0"}}>
            <Feed>
              {membersList}
            </Feed>
          </Card.Content>
        </Card>
      </Segment>
    </div>
  );
};

export default DetailGroupMember;
