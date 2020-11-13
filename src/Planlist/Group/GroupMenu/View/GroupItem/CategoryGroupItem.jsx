import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../../GroupStyle/Group.scss";

const CategoryGroupItem = ({ item, key, onCategorySelect }) => {
  return (
    <Link 
      to= {item.value === 'all' ? '/groupcategory/' : `/groupcategory/${item.value}`}
      onClick={() => onCategorySelect({text:item.text, value:item.value})}
    >
      <Card className="group_card categoryGroup_card" raised>
        <Image 
            src={item.imgurl} 
            className="categoryGroup_img" 
        />
        <div className="categoryGroup_caption"></div>
        <Card.Content className="categoryGroup_header">
          <Card.Header className="group_Card_header">{item.text}</Card.Header>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default CategoryGroupItem;
