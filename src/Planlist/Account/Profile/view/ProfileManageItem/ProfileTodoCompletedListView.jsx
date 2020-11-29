import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const ProfileTodoCompletedListView = ({
  completed_list,
  completed_date,
  selectedTodo,
  onLikeButton,
  today,
  onComplete,
  onIncomplete,
  loginId,
  selectId,
  onDeletePoint,
}) => {
  return (
    <div>
      {completed_list.map((date, index) => (
        <div key={index}>
          <p>
            {completed_date[index].substring(0, 4) +
              "년 " +
              completed_date[index].substring(5, 7) +
              "월 " +
              completed_date[index].substring(8, 10) +
              "일까지 완료한 일"}
          </p>
          <Card.Group>
            {date.map((item, index) => (
              <ProfileTodoCardView
                todo={item}
                key={index}
                selectedTodo={selectedTodo}
                onLikeButton={onLikeButton}
                today={today}
                onComplete={onComplete}
                onIncomplete={onIncomplete}
                loginId={loginId}
                selectId={selectId}
                onDeletePoint={onDeletePoint}
              />
            ))}
          </Card.Group>
          <Divider style={{ marginTop: "30px" }} />
        </div>
      ))}
    </div>
  );
};

export default ProfileTodoCompletedListView;
