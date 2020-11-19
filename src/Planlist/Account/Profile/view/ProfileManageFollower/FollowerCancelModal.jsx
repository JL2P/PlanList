import React from 'react';
import {  Image, Modal, Divider} from "semantic-ui-react";

const FollowerCancelModal = ({follower,open, onModal, onFollowRefuse}) => {
    return (
        <Modal
       
        onOpen={() => onModal(true)}
        onClose={() => onModal(false)}
        open={open}
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
                    src={follower.imgUrl}
                    bordered
                    centered
                    
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    alt="jsx-a11y/alt-text"
                    circular
                    size="tiny"
                    />
                </div>
                <div style={{padding:"1.2em"}}>
                    <span>박민재님의 팔로우를 취소하시겠어요?</span>
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
                <span style={{color:"red", fontWeight:"bold"}}
                onClick={()=>onFollowRefuse(follower.accountId)}>팔로우 취소</span>
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
                <span onClick={()=>{onModal(false)}}>취소</span>
                 </div>
                 </div>
                 </div>
            </Modal>
    );
};

export default FollowerCancelModal;