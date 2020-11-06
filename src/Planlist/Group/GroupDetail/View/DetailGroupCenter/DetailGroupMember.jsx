import React from "react";
import { Segment, Card, Feed, Button } from "semantic-ui-react";

const DetailGroupMember = ({detailGroup, memberList}) => {
  console.log(memberList[0].accountId)

  const membersList = memberList.map((member,index) => (
    <Feed.Event key ={index}>
      <Feed.Label image="/posts/test_img_1.jpg" />
      <Feed.Content>
        <Feed.Date content={member.accountId} />
        <Feed.Summary>
          그룹 가입일 : 
        </Feed.Summary>
      </Feed.Content>
      <Button size="tiny" basic color='grey'>
          그룹 강퇴
      </Button>
    </Feed.Event>
  ))

  return (
    <div>
      <Segment>
        <Card style={{width:"100%"}}>
          <Card.Content>
            <Card.Header>멤버 List</Card.Header>
          </Card.Content>

          <Card.Content>
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
