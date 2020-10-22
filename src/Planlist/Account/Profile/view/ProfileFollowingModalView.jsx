import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ProfileFollowingModalView = ({
    followingOpen,
    onFollowingModal
   
  }) => {
    return (

      <Modal
        onClose={() => onFollowingModal(false)}
        onOpen={() => onFollowingModal(true)}
        open={followingOpen}
        size="small"
       >
      </Modal>
  
    )
  }
export default ProfileFollowingModalView;