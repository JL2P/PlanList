import React, { useState } from "react";
import {
  Modal,
  Header,
  Divider,
  Container,
  Icon,
  Form,
  Select,
  Grid,
  Button,
} from "semantic-ui-react";
import FileUploadFormView from "./FileUploadFormView";

import "./todoInputItemsStyle.css";

const TodoCreateMobileForm = ({
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

  const maxNumber = 69;

  /* 카테고리 */
  const options = [
    { key: "e", text: "운동", value: "exercise" },
    { key: "s", text: "공부", value: "study" },
    { key: "o", text: "기타등등", value: "other" },
  ];

  const onChangeImages = (imageList) => setImages(imageList);
  const onChangeCategory = (e) => setCategory(e.target.value);
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
        <div style={{ margin: "1em" }}>
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
          <Divider style={{ marginTop: "-0.5em", marginBottom: "1.5em" }} />

          {/* Todo 입력 폼 */}
          <Form>
            <Grid stackable>
              <Grid.Row>
                <Form.Field style={{ width: "100%" }}>
                  <label>카테고리</label>
                  <Select
                    placeholder="카테고리"
                    value={category}
                    options={options}
                    onChange={onChangeCategory}
                  />
                </Form.Field>
              </Grid.Row>
              <Grid.Row style={{ marginTop: "0.5em" }}>
                <Form.Field style={{ width: "100%" }}>
                  <label>계획 제목</label>
                  <input
                    placeholder="계획을 한마디로 표현해보세요."
                    value={title}
                    onChange={onChangeTitle}
                  />
                </Form.Field>
              </Grid.Row>

              <Grid.Row style={{ marginTop: "0.5em" }}>
                <Form.Field style={{ width: "100%" }}>
                  <label>계획 내용</label>
                  <textarea
                    placeholder="오늘은 어떤 계획을 생각하고 계십니까?"
                    value={description}
                    onChange={onChangeDescription}
                    style={{ maxHeight: "60px" }}
                  />
                </Form.Field>
              </Grid.Row>

              {/* 시작 날짜 추가 */}
              <Grid.Row style={{ marginTop: "0.5em", width: "100%" }}>
                <Form.Field style={{ width: "100%" }}>
                  <label>시작일자</label>
                  <input
                    type="date"
                    required
                    // value={startTime ? startTime : today}
                    value={
                      startTime ? (
                        startTime > (endTime ? endTime : today) ? (
                          <div>
                            {alert("날짜 입력 형식이 틀렸습니다.")}
                            {today}
                          </div>
                        ) : (
                          startTime
                        )
                      ) : (
                        today
                      )
                    }
                    onChange={onChangeStartTime}
                  />
                </Form.Field>
              </Grid.Row>
              {/* 마감 날짜 추가 */}
              <Grid.Row style={{ marginTop: "0.5em", width: "100%" }}>
                <Form.Field style={{ width: "100%" }}>
                  <label>마감일자</label>
                  <input
                    type="date"
                    required
                    // value={endTime ? endTime : today}
                    value={
                      endTime ? (
                        endTime < (startTime ? startTime : today) ? (
                          <div>
                            {alert("날짜 입력 형식이 틀렸습니다.")}
                            {today}
                          </div>
                        ) : (
                          endTime
                        )
                      ) : (
                        today
                      )
                    }
                    onChange={onChangeEndTime}
                  />
                </Form.Field>
              </Grid.Row>
            </Grid>

            {/* 이미지 업로드 부분 */}
            <div style={{ marginTop: "1.5em" }}>
              <FileUploadFormView
                images={images}
                onChangeImages={onChangeImages}
                maxNumber={maxNumber}
                message={"이미지를 업로드 해주세요"}
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

export default TodoCreateMobileForm;
