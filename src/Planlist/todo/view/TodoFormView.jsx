import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  TextArea,
  Grid,
  Modal,
  Header,
  Divider,
  Container,
  Icon,
} from "semantic-ui-react";
import ImageUploader from "react-images-upload";
import fileUploadFormView from "./fileUploadFormView";

const options = [
  { key: "e", text: "운동", value: "exercise" },
  { key: "s", text: "공부", value: "study" },
  { key: "o", text: "기타등등", value: "other" },
];

const TodoFormView = ({ props, open, onModal, todoTitle, onChangeTitle }) => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };

  return (
    <Modal
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      open={open}
      size="tiny"
    >
      <Container>
        <div style={{ height: "400px", margin: "3em" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Header as="h2" content="Todo 작성" />
            <Icon
              name="x"
              size="big"
              style={{ marginBottom: "0.5em" }}
              onClick={() => {
                onModal(false);
              }}
            />
          </div>
          <Divider />
          <Form>
            <label>글제목</label>
            <Form.Field
              transparent
              value={todoTitle}
              control={Input}
              placeholder="글 제목"
              onChange={onChangeTitle}
            />

            <TextArea
              transparent
              placeholder="Tell us more"
              style={{ minHeight: 100 }}
            />
          </Form>

          <fileUploadFormView />
        </div>
      </Container>
    </Modal>
  );
};

export default TodoFormView;
