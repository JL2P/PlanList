import React from 'react';
import RecommendGroupItem from "./GroupItem/RecommendGroupItem";
import { Container, Grid} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../GroupStyle/Group.scss";

const RecommendGroupView = ({sampleData}) => {
    const Groupitem = sampleData.map((item, index) => (
        <RecommendGroupItem key={index} item={item} />
    ));

    return (
        <div className="bestGroup_wrap">
            <Container className="group_container_border">
                <div className="group_header_text">
                    <p className="group_header_headerText">추천 더 보기</p>
                    <p className="group_header_contents">다른 사람들과 같이 계획에 참여해 보세요!</p>
                    <Link to="/" className="group_allView">모두 보기</Link>
                </div>
                <Grid columns={4} divided>
                    <Grid.Row>
                        {Groupitem}
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default RecommendGroupView;