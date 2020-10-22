import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import "./ProfileTodoCardView.scss";

const ProfileTodoCardView = ({ todo }) => {
  return (
    <Card>
      <Image
        className="ProfileTodoCard__image"
        src={todo.imgUrl}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{todo.title}</Card.Header>
        <Card.Description>{todo.description}</Card.Description>
        {/* <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta> */}
      </Card.Content>
      <Card.Content extra>
        <Icon name="clock outline" />

        <Button basic size="mini">
          시작 {todo.start_time}
        </Button>
        <Button basic size="mini" color="yellow">
          종료 {todo.end_time}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ProfileTodoCardView;
