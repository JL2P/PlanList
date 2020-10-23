import React from 'react';
import { Container, Item, Button, Image } from "semantic-ui-react";
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
                    <Image
                    src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                    alt="jsx-a11y/alt-text"
                    circular
                    />
                </div>
                <div className="part_b">
                
                    <text style={{marginLeft:"1em", fontSize:"14px"}}
                    >박민재</text>
                    
                </div>
            </div>
            <div clasName="part_a2">
                <Button size="tiny" basic color='grey' onClick={()=>{alert("delete!!")}}>
                삭제
                </Button>
            </div>
            </div>
        </Item>
        </Container>
        </div> 
    );
};

export default ProfileFollowerView;