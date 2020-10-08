import React from "react";
import { Card, Image, Button, Radio, Checkbox } from "semantic-ui-react";

const ProfileTodoCardView = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          bordered
          floated="right"
          width="30%"
          src="/profiles/hungry.png"
        />
        <Card.Header>
          <Checkbox color="red" />
          &ensp;To Do Title
        </Card.Header>
        <Card.Meta>start_time&ensp;2020-00-00</Card.Meta>
        <Card.Meta>end_time&emsp;2020-00-00</Card.Meta>
        <Radio slider />
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ProfileTodoCardView;
