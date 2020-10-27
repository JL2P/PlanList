import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const ProfileTodoPastListView = ({ past_list, past_date }) => {
  return (
    <div>
      {past_list.map((date, index) => (
        <div key={index}>
          <p>{past_date[index]}</p>
          <Card.Group>
            {date.map((item, index) => (
              <ProfileTodoCardView todo={item} key={index} />
            ))}
          </Card.Group>
          <Divider></Divider>
        </div>
      ))}
    </div>
  );
};

export default ProfileTodoPastListView;
