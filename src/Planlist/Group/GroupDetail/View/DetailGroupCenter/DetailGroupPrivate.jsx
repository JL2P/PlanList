import React from 'react';
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

const DetailGroupPrivate = () => {
    return (
        <Segment textAlign="center">
          <Header style={{ marginTop: "15px" }}>비공개 그룹입니다</Header>
            그룹에 가입해서 다른 사람들과 함께 계획을 실천해 보세요!
            <Segment.Inline style={{ marginTop: "15px" }}>
             
            </Segment.Inline>
        </Segment>
    );
};

export default DetailGroupPrivate;