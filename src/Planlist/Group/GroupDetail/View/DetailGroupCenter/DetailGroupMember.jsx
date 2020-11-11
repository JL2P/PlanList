import React from "react";
import { Segment, Card, Feed, Button } from "semantic-ui-react";

const DetailGroupMember = ({
    group, 
    memberList,
    onMemberApply
  }) => {
  
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
                <small>그룹 가입일 :</small> 
            </Feed.Summary>
          </Feed.Content>
          <form>
            <Button size="tiny" basic color='blue' onClick={(e) => onMemberApply(e,{
                id:`${member.id}`,
                accountId:`${member.accountId}`,
                confirm:"true",
                manager:`${member.manager}`,
                groupId:`${member.groupId}`
            })}>
                확인
            </Button>
            <Button size="tiny" basic color='red' style={{marginLeft:"0.5rem"}}>
                취소
            </Button>
          </form>
        </Feed.Event>
    ) : ""
  ))

  //멤버 List
  const membersList = memberList.map((member,index) => (
      member.confirm === "true" ? (
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
              <small>그룹 가입일 :</small> 
            </Feed.Summary>
          </Feed.Content>
          <div>
            <Button size="tiny" basic color='red'>
                그룹 강퇴
            </Button>
          </div>
        </Feed.Event>
      ) : ""
  ))

  return (
    <div>
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
