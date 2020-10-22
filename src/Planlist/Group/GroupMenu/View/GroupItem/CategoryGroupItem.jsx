import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../../GroupStyle/Group.scss";

const CategoryGroupItem = ({ item }) => {
  return (
    <Link to="/">
      <Card className="group_card categoryGroup_card" raised>
        <Image 
            src={item.imgUrl} 
            className="categoryGroup_img" 
        />
        <div className="categoryGroup_caption"></div>
        <Card.Content className="categoryGroup_header">
          <Card.Header className="group_Card_header">{item.title}</Card.Header>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default CategoryGroupItem;
