import React,{useState} from 'react';
import { Segment, Form, Button, Input, TextArea } from "semantic-ui-react";

const DetailGroupSettingM = ({
        onSettingSave,
        detailGroup,
        onSettingRemove
    }) => {
    const [title, setTitle] = useState(detailGroup.title);
    const [description, setDescription] = useState(detailGroup.description);

    //jpa 수정을 위한 소스에 id값을 같이 넘겨주지 않으면 에러가 나거나 row가 추가 생성 된다.
    const id = detailGroup.id;

    const onTitle = (e) => {setTitle(e.target.value);}
    const  onDescription = (e) => {setDescription(e.target.value);}
    
    return (
        <div>
            <Segment>
                <Form onSubmit={(e) => onSettingSave(e,{id, title, description})} >
                    <Form.Field
                        label="Title 수정"
                        control={Input}
                        value={title} 
                        onChange={(e) => onTitle(e)}
                    />

                    <Form.Field
                        label="소개글 수정"
                        control={TextArea}
                        value={description} 
                        onChange={(e) => onDescription(e)}
                    />

                    <Button onClick={(e) => onSettingRemove(e,detailGroup.id)} inverted color='red'>그룹 삭제</Button>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
        </div>
    );
};

export default DetailGroupSettingM;