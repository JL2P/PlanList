import React from "react";
import { Card, Image, Icon, Label, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import '../../GroupStyle/MyGroup.scss';

const MyGroupItem = ({item}) => {
  
  return (
    <Grid.Column style={{boxShadow:"none"}} className="MyGroup_img_padding">
      <Link to ="/">
        <Card style={{ float:"left" }} raised>
          <img src={item.imgUrl} className="MyGroup_img" />
          <Card.Content >
            <Card.Header style={{fontSize:"1.1rem", height:"40px",overflow:"hidden"}}>{item.title}</Card.Header>
            <Card.Description>member : {item.rating}</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </Grid.Column>
  );
};

export default MyGroupItem;