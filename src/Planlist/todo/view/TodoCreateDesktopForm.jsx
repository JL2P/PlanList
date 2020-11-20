import React, { useState } from "react";
import {
  Modal,
  Header,
  Divider,
  Container,
  Icon,
  Form,
  Input,
  Select,
  TextArea,
  Grid,
  Button,
} from "semantic-ui-react";
import FileUploadFormView from "./FileUploadFormView";
import CategoryList_Data from "../../Category/CategoryList_Data";
import "./todoInputItemsStyle.css";

const TodoCreateDesktopForm = ({
  open,
  onModal,
  title,
  onChangeTitle,
  createTodo,
  today,
}) => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startTime, setStartTime] = useState("");

  //그리드 사이즈 지정
  const GRID_LEFT = 4;
  const GRID_RIGHT = 16 - GRID_LEFT;
  const maxNumber = 69;

  /* 카테고리 */
  const options = CategoryList_Data.slice(3, -1).map((category) => {
    return {
      key: category.value,
      text: category.text,
      value: category.value,
    };
  });

  const onChangeImages = (imageList) => setImages(imageList);
  const onChangeCategory = (e, { value }) => {
    setCategory(value);
  };
  const onChangeDescription = (e) => setDescription(e.target.value);
  const onChangeEndTime = (e) => setEndTime(e.target.value);
  const onChangeStartTime = (e) => setStartTime(e.target.value);
  
  return (
    <Modal
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      open={open}
      size="tiny"
    >
      <Container>
        <div style={{ margin: "3em" }}>
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

          {/* Todo 입력 폼 */}
          <Form>
            <Grid stackable>
              <Grid.Row columns={2}>
                <Grid.Column width={GRID_LEFT}>
                  <aside>
                    <label>카테고리</label>
                  </aside>
                </Grid.Column>
                <Grid.Column width={GRID_RIGHT}>
                  <Form.Field
                    control={Select}
                    value={category}
                    options={options}
                    onChange={onChangeCategory}
                    placeholder="카테고리"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2} style={{ marginTop: "-1em" }}>
                <Grid.Column width={GRID_LEFT}>
                  <aside>
                    <label>계획 제목</label>
                  </aside>
                </Grid.Column>
                <Grid.Column width={GRID_RIGHT}>
                  <Form.Field
                    value={title}
                    control={Input}
                    onChange={onChangeTitle}
                    placeholder="계획을 한마디로 표현해보세요."
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2} style={{ marginTop: "-1em" }}>
                <Grid.Column width={GRID_LEFT}>
                  <aside>
                    <label>계획 내용</label>
                  </aside>
                </Grid.Column>
                <Grid.Column width={GRID_RIGHT}>
                  <Form.Field
                    control={TextArea}
                    value={description}
                    onChange={onChangeDescription}
                    placeholder="오늘은 어떤 계획을 생각하고 계십니까?"
                    style={{ minHeight: 100 }}
                  />
                </Grid.Column>
              </Grid.Row>

              {/* 시작일자 추가 */}
              <Grid.Row columns={2} style={{ marginTop: "-1em" }}>
                <Grid.Column width={GRID_LEFT}>
                  <aside>
                    <label>시작일자</label>
                  </aside>
                </Grid.Column>
                <Grid.Column width={GRID_RIGHT}>
                  <input
                    type="date"
                    required
                    value={startTime ? startTime : today}
                    onChange={onChangeStartTime}
                  />
                </Grid.Column>
              </Grid.Row>
              {/* 마감일자 추가 */}
              <Grid.Row columns={2} style={{ marginTop: "-1em" }}>
                <Grid.Column width={GRID_LEFT}>
                  <aside>
                    <label>마감일자</label>
                  </aside>
                </Grid.Column>
                <Grid.Column width={GRID_RIGHT}>
                  <input
                    type="date"
                    required
                    value={endTime ? endTime : today}
                    onChange={onChangeEndTime}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            {/* 이미지 업로드 부분 */}
            <div style={{ marginTop: "1em" }}>
              <FileUploadFormView
                images={images}
                onChangeImages={onChangeImages}
                maxNumber={maxNumber}
                message={"클릭 또는 드래그하여 이미지를 업로드 해주세요"}
              />
            </div>

            <Button
              fluid
              style={{
                marginTop: "1em",
                background: "#FFB517",
                color: "#ffffff",
              }}
              onClick={(e) => {
                createTodo(e, {
                  category: category,
                  title: title,
                  description: description,
                  endTime: endTime === "" ? today : endTime,
                  startTime: startTime === "" ? today : startTime,
                });
              }}
            >
              저장
            </Button>
          </Form>
        </div>
      </Container>
    </Modal>
  );
};

export default TodoCreateDesktopForm;
