import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const ProfileTodoFromNowListView = ({
  fromNow_list,
  fromNow_date,
  selectedTodo,
  onLikeButton,
}) => {
  return (
    <div>
      {fromNow_list.map((date, index) => (
        <div key={index}>
          <p>{fromNow_date[index]}</p>
          <Card.Group>
            {date.map((item, index) => (
              <ProfileTodoCardView
                key={index}
                todo={item}
                selectedTodo={selectedTodo}
                onLikeButton={onLikeButton}
              />
            ))}
          </Card.Group>
          <Divider></Divider>
        </div>
      ))}
    </div>
  );
};

export default ProfileTodoFromNowListView;
