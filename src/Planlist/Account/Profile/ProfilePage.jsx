import React from "react";
import ProfileMangeContainer from "./container/ProfileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";
import { Container } from "semantic-ui-react";

const ProfilePage = () => {
  return (
    <div>
      <ProfileMangeContainer />
      <ProfileTodoContainer />
    </div>
  );
};

export default ProfilePage;
