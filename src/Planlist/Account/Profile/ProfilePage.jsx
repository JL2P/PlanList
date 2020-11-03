import React from "react";
import ProfileMangeContainer from "./container/ProfileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";

const ProfilePage = ({ match }) => {
  const id = match.params.id;
  return (
    <div>
      <ProfileMangeContainer id={id}/>
      <ProfileTodoContainer />
    </div>
  );
};

export default ProfilePage;
