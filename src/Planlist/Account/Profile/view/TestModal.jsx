import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";

// 모달창이 열렸을때 보여지는 페이지
const TestModal = ({ open, onOpen }) => {
  return (
    <Modal open={open}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          wrapped
        />

        <Modal.Description>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.
          </p>

          <Image
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginBottom: 10 }}
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginBottom: 10 }}
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginBottom: 10 }}
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginBottom: 10 }}
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginBottom: 10 }}
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginBottom: 10 }}
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginBottom: 10 }}
          />
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => onOpen(false)} primary>
          Proceed <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
      {/* <Modal.Header>Select a Photo</Modal.Header>
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
        <Button color="black" onClick={() => onOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => onOpen(false)}
          positive
        />
      </Modal.Actions> */}
    </Modal>
  );
};

export default TestModal;
