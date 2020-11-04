import React from 'react';
import { Modal} from 'semantic-ui-react'
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
        <Modal.Content scrolling style={{ width: "100%" }}>
        <ProfileFollowerListContainer />
      </Modal.Content>
  </Modal>
  )
}
export default ProfileFollowerModalView;