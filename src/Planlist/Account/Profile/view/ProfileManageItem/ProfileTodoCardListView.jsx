import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ProfileTodoCardView from "./ProfileTodoCardView";
const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const element = array.map((item) => <ProfileTodoCardView />);
const ProfileTodoCardListView = () => {
  return (
    <div>
      {array.map((item) => (
        <div>
          <p>2020년 00월 00일</p>
          <Card.Group>{element}</Card.Group>
          <Divider></Divider>
        </div>
      ))}
    </div>
  );
};

export default ProfileTodoCardListView;
