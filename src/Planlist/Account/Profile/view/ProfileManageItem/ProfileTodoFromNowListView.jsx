import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const ProfileTodoFromNowListView = ({ fromNow_list, fromNow_date }) => {
  return (
    <div>
      {fromNow_list.map((date, index) => (
        <div>
          <p>{fromNow_date[index]}</p>
          <Card.Group>
            {fromNow_list[index].map((item, index) => (
              <ProfileTodoCardView todo={item} />
            ))}
          </Card.Group>
          <Divider></Divider>
        </div>
      ))}
    </div>
  );
};

export default ProfileTodoFromNowListView;
