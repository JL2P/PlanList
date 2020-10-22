import React from 'react';
import { Container, Item, Label, Button,Header } from "semantic-ui-react";
const ProfileFollowerView = () => {
    return (
        <div>
        <Container >
        <Item>
            <div 
            className="part_a"
            style={{
                display:'flex', /* flex로 지정*/ 
                justifyContent:"space-between", /* 양옆으로 벌리는 기능 */
                alignItems:"center", /* 높이의 정중앙 */
                margin:"1em"
                }}>
            <div className="part_a1" style={{
                display:"flex",
                justifyContent:"flex-start", /* 플랙스 박스 시작점부터 정렬  ㄹ*/
                alignItems:"center"

            }}>
                <div className="part_b">
                    <img
                    src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                    alt="jsx-a11y/alt-text"
                    />
                </div>
                <div className="part_b">
                
                    <Header as="h3" style={{marginLeft:"0.5em"}}>박민재</Header>
                </div>
            </div>
            <div clasName="part_a2">
                <Header as='h4' color='red' onClick={()=>{alert("delete!!")}}>
                delete
                </Header>
            </div>
            </div>
        </Item>
        </Container>
        </div> 
    );
};

export default ProfileFollowerView;