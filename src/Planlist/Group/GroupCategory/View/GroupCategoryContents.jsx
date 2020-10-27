import React from 'react';
import { Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../GroupStyle/Group.scss";

const GroupCategoryContents = ({selectList}) => {

    return (
        <div>
            <h2 style={{marginBottom:"2rem"}}>{selectList.text}</h2>
            <Grid columns={4} divided>
                <Grid.Row>

                {/************* 수정 해야함 ***************/}
                <Grid.Column className="recommendGroup_column">
                    <Link to="/groupdetail">
                        <Card className="group_card" raised>
                        <Image src={selectList.imgUrl} className="Group_img" />
                        <Card.Content>
                            <Card.Header className="group_Card_header">
                            {selectList.title}
                            </Card.Header>
                            <Card.Description>member : {selectList.rating}</Card.Description>
                        </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
                <Grid.Column className="recommendGroup_column">
                    <Link to="/groupdetail">
                        <Card className="group_card" raised>
                        <Image src={selectList.imgUrl} className="Group_img" />
                        <Card.Content>
                            <Card.Header className="group_Card_header">
                            {selectList.title}
                            </Card.Header>
                            <Card.Description>member : {selectList.rating}</Card.Description>
                        </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
                <Grid.Column className="recommendGroup_column">
                    <Link to="/groupdetail">
                        <Card className="group_card" raised>
                        <Image src={selectList.imgUrl} className="Group_img" />
                        <Card.Content>
                            <Card.Header className="group_Card_header">
                            {selectList.title}
                            </Card.Header>
                            <Card.Description>member : {selectList.rating}</Card.Description>
                        </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
                <Grid.Column className="recommendGroup_column">
                    <Link to="/groupdetail">
                        <Card className="group_card" raised>
                        <Image src={selectList.imgUrl} className="Group_img" />
                        <Card.Content>
                            <Card.Header className="group_Card_header">
                            {selectList.title}
                            </Card.Header>
                            <Card.Description>member : {selectList.rating}</Card.Description>
                        </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
                <Grid.Column className="recommendGroup_column">
                    <Link to="/groupdetail">
                        <Card className="group_card" raised>
                        <Image src={selectList.imgUrl} className="Group_img" />
                        <Card.Content>
                            <Card.Header className="group_Card_header">
                            {selectList.title}
                            </Card.Header>
                            <Card.Description>member : {selectList.rating}</Card.Description>
                        </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
                <Grid.Column className="recommendGroup_column">
                    <Link to="/groupdetail">
                        <Card className="group_card" raised>
                        <Image src={selectList.imgUrl} className="Group_img" />
                        <Card.Content>
                            <Card.Header className="group_Card_header">
                            {selectList.title}
                            </Card.Header>
                            <Card.Description>member : {selectList.rating}</Card.Description>
                        </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
                {/************* 수정 해야함 ***************/}

                </Grid.Row>
            </Grid>
        </div>
    );
};

export default GroupCategoryContents;