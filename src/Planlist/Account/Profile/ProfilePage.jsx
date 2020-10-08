import React from "react";
import PofileMangeContainer from "./container/PofileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";
import { Container } from "semantic-ui-react";

const ProfilePage = () => {
  return (
    <div>
      <PofileMangeContainer />
      <ProfileTodoContainer />
    </div>
  );
};

export default ProfilePage;
