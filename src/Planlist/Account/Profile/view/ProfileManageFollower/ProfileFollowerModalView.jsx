import React from 'react';
import {Grid, List, Button, Modal, Label } from 'semantic-ui-react'
import ProfileFollowerListView from "./ProfileFollowerListView";

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
      <ProfileFollowerListView></ProfileFollowerListView>
      </Modal.Content>
  </Modal>
  )
}
export default ProfileFollowerModalView;