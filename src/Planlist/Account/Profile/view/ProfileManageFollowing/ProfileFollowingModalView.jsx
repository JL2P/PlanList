import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ProfileFollowingListView from './ProfileFollowingListView';

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
      <ProfileFollowingListView/>  
      </Modal.Content>
      </Modal>
  
    )
  }
export default ProfileFollowingModalView;