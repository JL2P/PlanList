import React,{useState} from 'react';
import { Card, Icon, TextArea, Form, Button } from 'semantic-ui-react'

const DetailChattingView = () => {
    const [IconCheck, setIconCheck] = useState(false);
    
    const onToggle = () => {
        if(IconCheck === false){
            setIconCheck(true)
        }else{
            setIconCheck(false)
        }
    }

    return (
        <Card>
            <Card.Content onClick={onToggle} style={{cursor:"pointer"}} >
                <h3 style={{marginBottom:"0",display:"inline-block"}}> Group Chatting</h3>
                {IconCheck ? 
                    (
                        <Icon style={{
                            fontSize:"2em", 
                            float:"right",
                            display:"flex",
                            alignItems:"center",
                        }} name="angle up" />
                    ) : 
                    (
                        <Icon style={{
                            fontSize:"2em", 
                            float:"right",
                            display:"flex",
                            alignItems:"center",
                        }} name="angle down" />
                    )
                }
                
            </Card.Content>
            {IconCheck ? (
                <>
                    <Card.Content>
                        <Form>
                            <TextArea style={{height:"300px"}} />
                        </Form>
                    </Card.Content>

                    <Card.Content>
                        <Form>
                            <TextArea style={{height:"50px"}} placeholder='채팅을 시작하세요' />
                            <Button style={{float:"right",margin:"1rem 0 0 0 ",width:"100%"}} color='yellow'>전송</Button>
                        </Form>
                    </Card.Content>
                </>
            ) : "" }
            
        </Card>
    );
};

export default DetailChattingView;