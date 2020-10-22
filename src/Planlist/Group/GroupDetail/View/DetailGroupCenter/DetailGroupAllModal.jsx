import React,{useState} from 'react';
import {Modal , Input, Form} from "semantic-ui-react";

const DetailGroupAllModal = ({onDetailGroup_create}) => {
    const [title, setTitle] = useState("");

    const onTitle = (e) => setTitle(e.target.value);
    console.log(title)
    return (
        <>
            <Modal.Content>
                <p>테스트 케이스</p>
                <Form onSubmit={(e) =>{
                        onDetailGroup_create(e,{title}
                    )}}
                >
                    <Input 
                        onChange={onTitle} 
                        value={title}
                        placeholder='title...' 
                    />
                </Form>
            </Modal.Content>
        </>
    );
};

export default DetailGroupAllModal;