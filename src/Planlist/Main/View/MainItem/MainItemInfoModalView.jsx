import React from "react";
import "./itemModalStyle.css";
import { Link } from "react-router-dom";
import { Modal, Image, Label, Icon } from "semantic-ui-react";

const MainItemInfoModalView = ({ todo, open, onModal, children }) => {
  return (
    <Modal
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      open={open}
      size="small"
    >
      <Modal.Header>{todo.title}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={todo.imgUrl} style={{ maxHeight: "300px" }} />
        <div className="modal__description">
          <Modal.Description>
            <h3>Description</h3>
            <p>{todo.description}</p>
          </Modal.Description>
          <div className="modal__description__info">
            <Link to={`/account/${todo.writer}`}>
              <Label as="a" basic image>
                <img
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  alt="jsx-a11y/alt-text"
                />
                {todo.writer}
              </Label>
            </Link>
            <Label basic>
              <Icon name="heart" color="red" /> {todo.likePoint}
            </Label>
          </div>
        </div>
      </Modal.Content>
      {children}
    </Modal>
  );
};

export default MainItemInfoModalView;
