import React from "react";
import { Button, Header, Image, Modal} from "semantic-ui-react";
import "./TodoView.scss";

//rsc
const TodoView = ({ todoEdit}) => {
  const [open, setOpen] = React.useState(false);



  return (
    <div>
      <div>
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
     
        <Button onClick={() => todoEdit()}>설정</Button>
        
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

    </div>
      <div className="todo__page">
        <div className="todo__innerpage">
          <table className="todo__table">
            <form id="todo__title" input="text" method="post" action="">
              <tr>
                <td>제목</td>
                <td><input type="text" name="title"/></td>
              </tr>
              <tr>
                <td>오늘 할 일</td>
                <td><input type="text" name="todaytodo"/></td>
              </tr>
        
            </form>

          </table>
        </div>
      </div>
    </div>

  );
};

export default TodoView;