import React from "react";
import ProfileMangeContainer from "./container/ProfileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";

const ProfilePage = () => {
  return (
    <div>
      <ProfileMangeContainer />
      <ProfileTodoContainer />
    </div>
  );
};

export default ProfilePage;
