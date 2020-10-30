import React from "react";
import { Segment, Card, Feed, Button } from "semantic-ui-react";

const DetailGroupMember = () => {
  return (
    <div>
      <Segment>
        <Card style={{width:"100%"}}>
          <Card.Content>
            <Card.Header>멤버 List</Card.Header>
          </Card.Content>

          <Card.Content>
            <Feed>

            {/* 수정해야할 항목 */}
              <Feed.Event>
                <Feed.Label image="/posts/test_img_1.jpg" />
                <Feed.Content>
                  <Feed.Date content="이명호" />
                  <Feed.Summary>
                    그룹 가입일 : 
                  </Feed.Summary>
                </Feed.Content>
                <Button size="tiny" basic color='grey'>
                    그룹 강퇴
                </Button>
              </Feed.Event>
            {/* 수정해야할 항목 */}

            </Feed>
          </Card.Content>
        

        </Card>
      </Segment>
    </div>
  );
};

export default DetailGroupMember;
