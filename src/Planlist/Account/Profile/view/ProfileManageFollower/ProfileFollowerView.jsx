import React, { useState } from "react";
import { Container, Item, Button, Image, Modal, Divider } from "semantic-ui-react";
const ProfileFollowerView = ({follow}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const onConfirmModal = (trigger) => {
        setConfirmOpen(trigger);
      };


    return (
        <div>
        
        
        <Modal
        onClose={() => setConfirmOpen(false)}
        onOpen={() => setConfirmOpen(true)}
        open={confirmOpen}
        size="mini"
        >
          
            <div
             style={{
                display:'flex', /* flex로 지정*/ 
                justifyContent:"center", 
                alignItems:"center", /* 높이의 정중앙 */
                marginTop:"1em"
                
                }}>
               <Modal.Content>
              <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center", 
                alignItems:"center"

            }}>
                <div style={{display:"flex",  justifyContent:"center"}}>
                    <Image style={{margin:"1em", alignItems: "center"} }
                    src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                    alt="jsx-a11y/alt-text"
                    circular
                    size="tiny"
                    />
                </div>
                <div style={{padding:"1.2em"}}>
                    <text>박민재님의 팔로우를 취소하시겠어요?</text>
                </div>
                </div>
                </Modal.Content>
                </div>
                <div>
              <Divider/>
                <div
                style={{
                display:'flex', /* flex로 지정*/ 
                justifyContent:"center", 
                alignItems:"center", /* 높이의 정중앙 */
                margin:"0.5em"
                
                }}>
                <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center", 
                alignItems:"center"

            }}>
                
                <div>
                <text style={{color:"red", fontWeight:"bold"}}>팔로우 취소</text>
                </div>
                </div>
                </div>
            </div>
            <Divider/>
                <div
                style={{
                display:'flex', /* flex로 지정*/ 
                justifyContent:"center", 
                alignItems:"center", /* 높이의 정중앙 */
                margin:"0.5em"
                
                }}>
                <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center", 
                alignItems:"center"

            }}>
                
                <div style={{marginBottom:"0.5em"}}>
                <text style={{}}>취소</text>
                 </div>
                 </div>
                 </div>
            </Modal>
    <Container>
    
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
               
                <div className="part_b2">
                    
                    <div>ID</div>
                    <div>
                        
                    <text style={{marginLeft:"1em", fontSize:"14px"}}
                    >박민재</text>
                    </div>
                    
                    
                </div>
                <div>

                </div>
            </div>
            <div clasName="part_a2">
                <Button onClick={()=>{follow("id들어가야함")}}>팔로우</Button>
                <Button size="tiny" basic color='grey' onClick={()=>{onConfirmModal(true)}}>
                팔로잉
                </Button>
            </div>
            </div>
        </Item>
        </Container>
        </div> 
    );
};

export default ProfileFollowerView;