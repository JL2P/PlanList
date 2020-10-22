import React from "react";
import "./itemModalStyle.css";
import { Modal, Image, Label, Icon } from "semantic-ui-react";
import TodoCommentFrame from "../../../todo/view/comment/TodoCommentFrame";

const MainItemModelView = ({ item, open, onModal }) => {
  return (
    <Modal
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      open={open}
      size="small"
    >
      <Modal.Header>{item.title}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={item.imgUrl} style={{ maxHeight: "300px" }} />
        <div className="modal__description">
          <Modal.Description>
            <h3>Description</h3>
            <p>{item.description}</p>
          </Modal.Description>
          <div className="modal__description__info">
            <Label as="a" basic image>
              <img
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                alt="jsx-a11y/alt-text"
              />
              {item.writer}
            </Label>
            <Label basic>
              <Icon name="heart" color="red" /> {item.rating}
            </Label>
          </div>
        </div>
      </Modal.Content>
      <TodoCommentFrame />
    </Modal>
  );
};

export default MainItemModelView;
