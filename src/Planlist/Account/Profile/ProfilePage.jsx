import React from "react";
import PofileMangeContainer from "./container/PofileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";

const ProfilePage = () => {
  return (
    <div>
      <PofileMangeContainer />
      <div>--------------------</div>
      <ProfileTodoContainer />
    </div>
  );
};

export default ProfilePage;
