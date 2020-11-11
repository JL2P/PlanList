import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const ProfileTodoPastListView = ({
  past_list,
  past_date,
  selectedTodo,
  onLikeButton,
  today,
}) => {
  return (
    <div>
      {past_list.map((date, index) => (
        <div key={index}>
          <p>
            {past_date[index].substring(0, 4) +
              "년 " +
              past_date[index].substring(5, 7) +
              "월 " +
              past_date[index].substring(8, 10) +
              "일까지 한 일"}
          </p>
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
