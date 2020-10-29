import React, {useEffect} from 'react';
import { Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../GroupStyle/Group.scss";

const GroupCategoryContents = ({GroupsData, selectList, onAllGroups,location}) => {
    //추후 전체보기 구현에 사용
    useEffect(() => {
        onAllGroups();
      },[]);

    const GroupCategoryitem = GroupsData.map((item, index) => (
        <>
            {`/groupcategory/${item.category}` == location.pathname ?
                    <Grid.Column key={index} className="recommendGroup_column">
                        <Link to="/groupdetail">
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
                    </Grid.Column>
                    
                : ""
            }
        </>
    ));

    return (
        <div>
            <h2 style={{marginBottom:"2rem"}}>{selectList.text}</h2>
            <Grid columns={4} divided>
                <Grid.Row>

                {GroupCategoryitem}

                </Grid.Row>
            </Grid>
        </div>
    );
};

export default GroupCategoryContents;