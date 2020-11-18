import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Item, Button, Image, Modal, Divider, Header, Icon} from "semantic-ui-react";
const ProfileFollowerView = ({
    follower, 
    isFollowing,
    onFollowRefuse,

}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);


    const onConfirmModal = (trigger) => {
        setConfirmOpen(trigger);
      };

      console.log(follower.imgUrl)


    return (
        <div>
          
        <Modal
       
        onOpen={() => setConfirmOpen(true)}
        onClose={() => setConfirmOpen(false)}
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
                <text style={{color:"red", fontWeight:"bold"}}
                onClick={()=>onFollowRefuse(follower.accountId)}>팔로우 취소</text>
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
                <text onClick={()=>{setConfirmOpen(false)}}>취소</text>
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
                {/* <Link to={{pathname:`/account/${follower.accountId}`,state:{fromDashboard:true}}} >  */}
                  <a href={'/account/' + follower.accountId}> <Image 
                    src={follower.imgUrl}
                    bordered
                    centered
                    
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}

                    alt="profile"
                    circular
                    />
                  </a> 
                {/* </Link>     */}
                </div>
               
                <div className="part_b2">
                <a href={'/account/' + follower.accountId}>   
                <div>{follower.accountId}</div>
                </a> 
                <div>{follower.name}</div>
                    
                    
                </div>
                <div>

                </div>
            </div>
            <div className="part_a2">
            {!isFollowing && (
                
                <Button size="tiny" basic color='grey' onClick={()=>{onConfirmModal(true)}}>
                팔로잉
                </Button>
            )}
            {isFollowing && (
                 <Button size="tiny" basic color='grey' onClick={()=>{onConfirmModal(true)}}>
                 팔로잉 취소
                 </Button>
            )}
            </div>
            </div>
        </Item>
        </Container>
        </div> 
    );
};

export default ProfileFollowerView;