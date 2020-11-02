import React,{useState} from 'react';
import { Segment, Form, Button, Input,} from "semantic-ui-react";

const DetailGroupSettingU = ({
        onSettingSave,
        detailGroup,
        onSettingRemove
    }) => {
    
    return (
        <div>
            <Segment>
                <Form >
                    <Button inverted color='red'>그룹 탈퇴</Button>
                </Form>
            </Segment>
        </div>
    );
};

export default DetailGroupSettingU;