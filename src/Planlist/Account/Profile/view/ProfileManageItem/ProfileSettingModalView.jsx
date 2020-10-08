import React from "react";
import { Container, Modal, Segment, Menu, Grid } from "semantic-ui-react";

const ProfileSettingModalView = ({ open, onOpen, activeItem }) => {
  const handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  return (
    <Modal open={open} size={"mini"}>
      <Modal.Header>
        <Container textAlign="center">설정</Container>
      </Modal.Header>
      <Modal.Content scrolling>
        {/* <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="bio"
                active={activeItem === "bio"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="pics"
                active={activeItem === "pics"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="companies"
                active={activeItem === "companies"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="links"
                active={activeItem === "links"}
                onClick={handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={7}>
            <Segment>
              This is an stretched grid column. This segment will always match
              the tab height
            </Segment>
          </Grid.Column>
        </Grid> */}
        <Modal.Description>
          <Segment textAlign="center">프로필 수정</Segment>
          <Segment textAlign="center">비밀번호 변경</Segment>
          <Segment textAlign="center">할 일 공개 범위 설정</Segment>
          <Segment textAlign="center" onClick={() => onOpen(false)} primary>
            취소
          </Segment>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ProfileSettingModalView;
