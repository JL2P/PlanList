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
  const [todoKindOpen, setTodoKindOpen] = useState(false);
  const [todoKind, setTodoKind] = useState("NONE");
  const [todoSubKind, setTodoSubKind] = useState("NONE");

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
  const onChangeEndTime = (e) => {
    setTodoKindOpen(today !== e.target.value ? true : false);
    setEndTime(e.target.value);
  };
  const onChangeStartTime = (e) => setStartTime(e.target.value);

  const onChangeTodoKind = (e, { value }) => {
    setTodoKind(value);
    setTodoSubKind(null);
  };
  const onChangeTodoSubKind = (e, { value }) => {
    setTodoSubKind(value);
  };

  const todoKindList = [
    { key: "NONE", value: "NONE", text: "기본" },
    { key: "DAY", value: "DAY", text: "일별 계획" },
    { key: "WEEK", value: "WEEK", text: "요일별 계획" },
  ];

  const none_list = [{ key: "NONE", value: "NONE", text: "기본" }];

  const day_list = [
    { key: "DAY1", value: "DAY1", text: "매일" },
    { key: "DAY2", value: "DAY2", text: "2일 간격" },
    { key: "DAY3", value: "DAY3", text: "3일 간격" },
    { key: "DAY4", value: "DAY4", text: "4일 간격" },
    { key: "DAY5", value: "DAY5", text: "5일 간격" },
  ];

  const week_list = [
    { key: "MON", value: "MON", text: "월요일" },
    { key: "TUE", value: "TUE", text: "화요일" },
    { key: "WEN", value: "WEN", text: "수요일" },
    { key: "THU", value: "THU", text: "목요일" },
    { key: "FRI", value: "FRI", text: "금요일" },
    { key: "SAT", value: "SAT", text: "토요일" },
    { key: "SUN", value: "SUN", text: "일요일" },
  ];

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
                </Grid.Column>
              </Grid.Row>

              {todoKindOpen && (
                <Grid.Row style={{ marginTop: "-1em" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Select
                      placeholder="계획단위"
                      options={todoKindList}
                      value={todoKind}
                      onChange={onChangeTodoKind}
                      style={{ marginRight: "1em" }}
                    />

                    <Select
                      placeholder={todoKind === "DAY" ? "기간" : "요일"}
                      value={todoSubKind}
                      options={
                        todoKind === "NONE"
                          ? none_list
                          : todoKind === "DAY"
                          ? day_list
                          : week_list
                      }
                      onChange={onChangeTodoSubKind}
                      style={{ marginLeft: "1em" }}
                    />
                  </div>
                </Grid.Row>
              )}
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
                  images: images,
                  todoKind: todoKind,
                  todoSubKind: todoSubKind,
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
