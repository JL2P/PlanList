import React, { useState } from "react";
import { Container, Item, Button } from "semantic-ui-react";

const HeaderFollowerRequestView = ({
    follower,  
    onFollowConfirm,
    onFollowRefuse,
}) => {
    return (
        <div style={{display:"inline-block"}}>
            <Container style={{width:"100%"}}>
                <Item>
                    <div className="part_a2">
                        <Button size="tiny" basic color='grey' onClick={()=>onFollowConfirm(follower.accountId)}>
                            수락
                        </Button>
                    
                        <Button size="tiny" basic color='grey' onClick={()=>onFollowRefuse(follower.accountId)}>
                            거절
                        </Button>
                    </div>
                </Item>
            </Container>
        </div> 
    );
};

export default HeaderFollowerRequestView;