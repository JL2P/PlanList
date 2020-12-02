import React from "react";
import { Modal, Header } from "semantic-ui-react";
import ProfileFollowingListContainer from "../../container/ProfileFollowingListContainer";

const ProfileFollowingModalView = ({
  followingOpen,
  onFollowingModal,
  selectUser,
}) => {
  return (
    <Modal
      closeIcon
      onClose={() => onFollowingModal(false)}
      onOpen={() => onFollowingModal(true)}
      open={followingOpen}
      // size="tiny"
      style={{ width: "420px" }}
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
          content="팔로잉"
        />

        <Modal.Content scrolling style={{ width: "100%", height: "420px" }}>
          <ProfileFollowingListContainer selectUser={selectUser} />
        </Modal.Content>
      </div>
    </Modal>
  );
};
export default ProfileFollowingModalView;
