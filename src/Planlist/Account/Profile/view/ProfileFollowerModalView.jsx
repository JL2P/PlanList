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
      size="mini"
      >
      <ProfileFollowerListView></ProfileFollowerListView>
  </Modal>
  )
}
export default ProfileFollowerModalView;