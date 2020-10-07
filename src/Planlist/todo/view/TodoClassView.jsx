import React, { Component } from "react";

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
    const {todoAdd ,todoUpdate, todoDelete, todoSave } = this.props;
    
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
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
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default TodoClassView;