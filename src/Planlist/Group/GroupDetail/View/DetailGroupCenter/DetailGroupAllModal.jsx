import React,{useState} from 'react';
import {Modal , Input} from "semantic-ui-react";

const DetailGroupAllModal = () => {
    const [title, setTitle] = useState("");

    const onTitle = (e) => setTitle(e.target.value);
    console.log(title)
    return (
        <>
            <Modal.Content>
                <p>테스트 케이스</p>
                <form>
                    <Input 
                        onChange={onTitle} 
                        value={title}
                        placeholder='title...' 
                    />
                </form>
            </Modal.Content>
        </>
    );
};

export default DetailGroupAllModal;