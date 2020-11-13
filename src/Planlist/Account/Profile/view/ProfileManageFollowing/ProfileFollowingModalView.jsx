import React from 'react';
import { Modal } from 'semantic-ui-react'
import ProfileFollowingListContainer from '../../container/ProfileFollowingListContainer';

const ProfileFollowingModalView = ({
    followingOpen,
    onFollowingModal
   
  }) => {
    return (

      <Modal

        onClose={() => onFollowingModal(false)}
        onOpen={() => onFollowingModal(true)}
        open={followingOpen}
        size="tiny"
       >
        <Modal.Content scrolling style={{ width: "100%" }}>
      <ProfileFollowingListContainer/>  
      </Modal.Content>
      </Modal>
  
    )
  }
export default ProfileFollowingModalView;