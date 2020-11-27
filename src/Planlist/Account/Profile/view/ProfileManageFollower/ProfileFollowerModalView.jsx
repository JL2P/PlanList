import React from "react";
import { Modal, Header } from "semantic-ui-react";
import ProfileFollowerListContainer from "../../container/ProfileFollowerListContainer";

const ProfileFollowerModalView = ({ followerOpen, onFollowerModal }) => {
  return (
    <Modal
      closeIcon
      onClose={() => onFollowerModal(false)}
      onOpen={() => onFollowerModal(true)}
      open={followerOpen}
      size="tiny"
    >
      <div style={{ margin: "1em" }}>
        <Header
          as="h3"
          dividing
          style={{
            marginTop: "0.5em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          content="팔로워"
        />

        <Modal.Content scrolling style={{ width: "100%" }}>
          <ProfileFollowerListContainer />
        </Modal.Content>
      </div>
    </Modal>
  );
};
export default ProfileFollowerModalView;
