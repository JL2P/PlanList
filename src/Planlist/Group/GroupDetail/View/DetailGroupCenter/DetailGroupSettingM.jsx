import React,{useState} from 'react';
import { Segment, Form, Button, Input, TextArea } from "semantic-ui-react";

const DetailGroupSettingM = ({
        onSettingSave,
        group,
        onSettingRemove
    }) => {
    const [title, setTitle] = useState(group.title);
    const [description, setDescription] = useState(group.description);

    //jpa 수정을 위한 소스에 id값을 같이 넘겨주지 않으면 에러가 나거나 row가 추가 생성 된다.
    const id = group.id;

    const onTitle = (e) => {setTitle(e.target.value);}
    const  onDescription = (e) => {setDescription(e.target.value);}
    
    return (
        <div>
            
            <Form onSubmit={(e) => onSettingSave(e,{id, title, description})} >
                <p style={{margin:"0 0 -6px 3px"}}>그룹 내용 수정</p>
                <Segment>
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
                </Segment>

                <p style={{margin:"1.2rem 0 -6px 3px"}}>그룹 공개 여부</p>
                <Segment>
                    <Button.Group>
                        <Button>Cancel</Button>
                        <Button.Or />
                        <Button positive>Save</Button>
                    </Button.Group>
                </Segment>

                <p style={{margin:"1.2rem 0 -6px 3px"}}>그룹 제거</p>          
                <Segment>
                    <Button onClick={(e) => onSettingRemove(e,group.id)} inverted color='red'>
                        그룹 삭제
                    </Button>
                </Segment>

                <p style={{margin:"1.2rem 0 -6px 3px"}}>최종 확인</p>
                <Segment style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                    <Button type='submit'>설정 저장</Button>
                </Segment>
            </Form>
        </div>
    );
};

export default DetailGroupSettingM;