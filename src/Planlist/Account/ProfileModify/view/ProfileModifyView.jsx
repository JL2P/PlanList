import React, { Component } from "react";
import { Card, Segment } from "semantic-ui-react";

const ProfileModifyView = ({account}) => {

    return (
    <div>
      <Card>

      <Segment.Group compact>
        
        <Segment textAlign="center">{account.email}</Segment>
        <Segment textAlign="center">프로필 수정</Segment>
        <Segment textAlign="center">프로필 수정</Segment>
        <Segment textAlign="center">프로필 수정</Segment>
      </Segment.Group>
      </Card>
    </div>
    );
}

export default ProfileModifyView;
