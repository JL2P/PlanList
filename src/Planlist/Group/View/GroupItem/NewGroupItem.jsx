import React from "react";
import { Card ,Image,Icon } from "semantic-ui-react";
import '../../GroupStyle/Group.scss';

const NewGroupItem = () => {
  return (
    <Card className="group_card, Newgroup_card" raised>
        <Icon name='add circle' className="Newgroup_circle" />
        <Card.Header className="group_Card_header">그룹 만들기</Card.Header>
    </Card>
  );
};

export default NewGroupItem;