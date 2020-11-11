import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const ProfileTodoPastListView = ({
  past_list,
  past_date,
  selectedTodo,
  onLikeButton,
}) => {
  return (
    <div>
      {past_list.map((date, index) => (
        <div key={index}>
          <p>{past_date[index]}</p>
          <Card.Group>
            {date.map((item, index) => (
              <ProfileTodoCardView
                todo={item}
                key={index}
                selectedTodo={selectedTodo}
                onLikeButton={onLikeButton}
              />
            ))}
          </Card.Group>
          <Divider style={{ marginTop: "30px" }} />
        </div>
      ))}
    </div>
  );
};

export default ProfileTodoPastListView;
