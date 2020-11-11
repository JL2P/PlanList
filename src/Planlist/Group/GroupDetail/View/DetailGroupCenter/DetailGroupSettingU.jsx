import React,{useState} from 'react';
import { Segment, Form, Button, Input,} from "semantic-ui-react";

const DetailGroupSettingU = ({
        group,
        member,
        onMemberRemove_user
    }) => {
    return (
        <div>
            <Segment>
                <Form >
                    <Button inverted color='red' onClick={() => onMemberRemove_user(group.id,member.id)}>그룹 탈퇴</Button>
                </Form>
            </Segment>
        </div>
    );
};

export default DetailGroupSettingU;