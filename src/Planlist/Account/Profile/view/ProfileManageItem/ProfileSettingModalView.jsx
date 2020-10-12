import React from "react";
import {
  Container,
  Modal,
  Segment,
  Menu,
  Grid,
  Button,
  Icon,
} from "semantic-ui-react";
import ProfileModifyView from "../../../ProfileModify/view/ProfileModifyView";
import ProfileManageView from "../ProfileManageView";
import "../../../ProfileModify/view/ProfileModifyView.scss";

const ProfileSettingModalView = ({
  open,
  onOpen,
  activeItem,
  handleItemClick,
  account,
}) => {
  // const handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  return (
    <Modal open={open} height={10}>
      <Modal.Header>
        <Container textAlign="center">설정</Container>
      </Modal.Header>
      <Modal.Content scrolling image>
        <Grid>
          <Grid.Column width={3}>
            <Menu vertical tabular pointing secondary>
              <Menu.Item
                name="프로필 수정"
                active={activeItem === "프로필 수정"}
                // onClick={handleItemClick}
                onClick={() => handleItemClick("프로필 수정")}
              />
              <Menu.Item
                name="비밀번호 변경"
                active={activeItem === "비밀번호 변경"}
                // onClick={handleItemClick}
                onClick={() => handleItemClick("비밀번호 변경")}
              />
              <Menu.Item
                name="공개 범위 설정"
                active={activeItem === "공개 범위 설정"}
                // onClick={handleItemClick}
                onClick={() => handleItemClick("공개 범위 설정")}
              />

              {/* <Menu.Item
                name="companies"
                active={activeItem === "companies"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="links"
                active={activeItem === "links"}
                onClick={handleItemClick}
              /> */}
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <div>
              {activeItem === "프로필 수정" && (
                <ProfileModifyView account={account} />
              )}
              {activeItem === "비밀번호 변경" && (
                <ProfileModifyView account={account} />
              )}
              {activeItem === "공개 범위 설정" && (
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;공개
                  범위 설정
                </p>
              )}
            </div>
          </Grid.Column>
        </Grid>

        {/* <Modal.Description>
          <Segment textAlign="center">프로필 수정</Segment>
          <Segment textAlign="center">비밀번호 변경</Segment>
          <Segment textAlign="center">할 일 공개 범위 설정</Segment>
          <Segment textAlign="center" onClick={() => onOpen(false)} primary>
            취소
          </Segment>
        </Modal.Description> */}
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" onClick={() => onOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={() => onOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProfileSettingModalView;
