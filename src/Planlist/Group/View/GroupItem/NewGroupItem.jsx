import React from "react";
import { Card ,Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import '../../GroupStyle/Group.scss';

const NewGroupItem = () => {
  return (
    <Link to="/">
      <Card className="group_card" raised>
        <Card.Content>
          <Card.Header className="group_Card_header">그룹 만들기</Card.Header>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default NewGroupItem;
