import React from 'react';
import { Card ,Image, Grid } from "semantic-ui-react";
import '../../../GroupStyle/Group.scss';

const DetailGroupAllList = ({item}) => {
    return (
        <Grid.Column className="recommendGroup_column">
            <Card className="group_card" raised>
                <Image src={item.imgUrl} className="Group_img" />
                <Card.Content>
                <Card.Header className="group_Card_header">{item.title}</Card.Header>
                <Card.Description>member : {item.rating}</Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
};

export default React.memo(DetailGroupAllList);