import React from 'react';
import { Modal, Header, Icon, Divider} from 'semantic-ui-react'
import ProfileFollowerListContainer from "../../container/ProfileFollowerListContainer"

const ProfileFollowerModalView = ({
  followerOpen,
  onFollowerModal
 
}) => {
  return (
    
    <Modal 
      onClose={() => onFollowerModal(false)}
      onOpen={() => onFollowerModal(true)}
      open={followerOpen}
      size="tiny"
      >
          <div style={{ margin: "1em" }}>
          <div
            style={{
              display: "flex",
              
              alignItems: "center",
            }}
        >

              
      
        <Header as="h3" dividing style={{
          marginTop:"0.5em" ,
          display: "flex",
          justifyContent: "center",
          
          alignItems: "center",
          }}
          content="팔로워" />
         
        <Icon
              name="x"
              size="big"
              style={{ 
                marginBottom: "0.5em",
                display: "flex",
                justifyContent: "end",
                alignItems: "right",
                
              }}
              onClick={() => {
                onFollowerModal(false);
              }}
            /> 
            </div>
          
        
        <Modal.Content scrolling style={{ width: "100%" }}>
        <ProfileFollowerListContainer />
      </Modal.Content>
   </div>
  </Modal>
  )
}
export default ProfileFollowerModalView;