import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

class TodoClassView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  setOpen = (flag) => {
    this.setState({ open: flag });
  };

  render() {
    const { todoAdd } = this.props.todoAdd;
    const { todoUpdate } = this.props.todoUpdate;
    const { todoDelete } = this.props.todoDelete;
    const { todoSave } = this.props.todoSave;

    return (
      <Modal
        // Class내에 선언한 함수는 밑에서 사용할때 this를 붙여야함
        onClose={() => this.setOpen(false)}
        onOpen={() => this.setOpen(true)}
        open={this.state.open}
        trigger={<Button>편집</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => todoAdd()}>Add</Button>
          <Button onClick={() => todoUpdate()}>Update</Button>
          <Button onClick={() => todoDelete()}>Delete</Button>
          <Button onClick={() => todoSave()}>Save</Button>
          <Button color="black" onClick={() => this.setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => this.setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default TodoClassView;
