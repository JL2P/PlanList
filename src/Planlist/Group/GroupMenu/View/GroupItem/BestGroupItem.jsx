import React from "react";
import { Card, Image} from "semantic-ui-react";
import { Link} from "react-router-dom";
import "../../../GroupStyle/Group.scss";

const BestGroupItem = ({ item }) => {

  return (
    <Link to="/">
      <Card className="group_card" raised>
        <Image src={item.imgUrl} className="Group_img" />
        <Card.Content>
          <Card.Header className="group_Card_header">
            {item.title}
          </Card.Header>
          <Card.Description>member : {item.rating}</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default BestGroupItem;