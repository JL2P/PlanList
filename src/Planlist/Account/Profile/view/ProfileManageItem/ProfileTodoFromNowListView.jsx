import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const ProfileTodoFromNowListView = ({
  fromNow_list,
  fromNow_date,
  selectedTodo,
  onLikeButton,
  today,
  onComplete,
  onIncomplete,
  loginId,
  onAddPoint,
}) => {
  return (
    <div>
      {fromNow_list.map((date, index) => (
        <div key={index}>
          <p>
            {fromNow_date[index] === today
              ? "오늘까지 해야 할 일"
              : fromNow_date[index].substring(0, 4) +
                "년 " +
                fromNow_date[index].substring(5, 7) +
                "월 " +
                fromNow_date[index].substring(8, 10) +
                "일까지 해야 할 일"}
          </p>
          <Card.Group>
            {date.map((item, index) => (
              <ProfileTodoCardView
                key={index}
                todo={item}
                selectedTodo={selectedTodo}
                onLikeButton={onLikeButton}
                onComplete={onComplete}
                onIncomplete={onIncomplete}
                loginId={loginId}
                today={today}
                onAddPoint={onAddPoint}
              />
            ))}
          </Card.Group>

          <Divider style={{ marginTop: "30px" }} />
        </div>
      ))}
    </div>
  );
};

export default ProfileTodoFromNowListView;
