import React, { useState } from "react";
import { Container, Item, Button, Image, Modal, Divider, Header, Icon} from "semantic-ui-react";

const ProfileFollowerView = ({
    follower, 
    isFollowing,
    onFollowRefuse,
    onBtn,
    children

}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);


    const onConfirmModal = (trigger) => {
        setConfirmOpen(trigger);
      };

      console.log(follower.imgUrl)


    return (
        <div>
          
        {children}
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
           
            {onBtn}
           
            </div>
            </div>
        </Item>
        </Container>
        </div> 
    );
};

export default ProfileFollowerView;