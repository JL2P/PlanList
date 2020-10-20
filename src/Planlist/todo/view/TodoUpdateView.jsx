import React, { Component } from "react";
import "./TodoView.scss";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  TextArea,
  Grid,
  Modal,
} from "semantic-ui-react";
// import TodoView from "./TodoView";
/* 카테고리 */
const options = [
  { key: "e", text: "운동", value: "exercise" },
  { key: "s", text: "공부", value: "study" },
  { key: "o", text: "기타등등", value: "other" },
];

class TodoUpdateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      category: "",
      endTime: "",
      completed: "",
    };
  }

  onTitleChange = (e) => this.setState({ title: e.target.value });
  onDescriptionChange = (e) => this.setState({ description: e.target.value });
  onCategoryChange = (e) => this.setState({ category: e.target.value });
  onEndTimeChange = (e) => this.setState({ endTime: e.target.value });
  onCompletedChange = (e) => this.setState({ completed: e.target.value });

  // setOpen= (flag)=>{this.setState({open:flag})}

  render() {
    const { onSaveTodo, open, onModal } = this.props;

    return (
      <Modal
        onClose={() => onModal(false)}
        onOpen={() => onModal(true)}
        open={open}
        size="large"
      >
        <div className="todo__updatePage">
          <div className="todo__content">
            <Form>
              <Grid stackable>
                <Grid.Row columns={2}>
                  <Grid.Column width={2}>
                    <aside>
                      <label>글제목</label>
                    </aside>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field
                      control={Input}
                      placeholder="글 제목"
                      onChange={this.onTitleChange}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column width={2}>
                    <aside>
                      <label>카테고리</label>
                    </aside>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field
                      control={Select}
                      options={options}
                      placeholder="카테고리"
                      onChange={this.onCategoryChange}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column width={2}>
                    <aside>
                      <label>무슨일할까</label>
                    </aside>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field
                      control={TextArea}
                      placeholder="할 일 작성.."
                      onChange={this.onDescriptionChange}
                    />
                  </Grid.Column>
                </Grid.Row>

                {/* 날짜 추가 */}
                <Grid.Row columns={2}>
                  <Grid.Column width={2}>
                    <aside>
                      <label>마감일자</label>
                    </aside>
                  </Grid.Column>
                  <Grid.Column>
                    <input
                      type="date"
                      required
                      onChange={this.onEndTimeChange}
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column>
                    <aside>
                      <label>완료여부</label>
                    </aside>{" "}
                    <br />
                    <div className="todo__checkbox_success">
                      <Checkbox
                        style={{ background: "white" }}
                        onChange={this.onCompletedChange}
                      />
                    </div>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column>
                    <div className="todo__button_exit">
                      <aside>
                        <Button onClick={() => onModal(false)}>닫기</Button>
                      </aside>
                    </div>
                    <div className="todo__button_save">
                      <aside>
                        <Button
                          onClick={(e) => {
                            onSaveTodo(e, { ...this.state });
                          }}
                        >
                          저장
                        </Button>
                      </aside>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TodoUpdateView;
