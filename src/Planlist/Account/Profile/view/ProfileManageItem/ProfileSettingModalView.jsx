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
import ProfileAccountModifyView from "../ProfileModifyItem/ProfileAccountModifyView";

const ProfileSettingModalView = ({
  open,
  onOpen,
  activeItem,
  handleItemClick,
  account,
  onModifyAccount,
}) => {
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
                name="내정보 관리"
                active={activeItem === "내정보 관리"}
                onClick={() => handleItemClick("내정보 관리")}
              />
              <Menu.Item
                name="비밀번호 변경"
                active={activeItem === "비밀번호 변경"}
                onClick={() => handleItemClick("비밀번호 변경")}
              />
              <Menu.Item
                name="소개글 수정"
                active={activeItem === "소개글 수정"}
                onClick={() => handleItemClick("소개글 수정")}
              />
              <Menu.Item
                name="공개 범위"
                active={activeItem === "공개 범위 설정"}
                onClick={() => handleItemClick("공개 범위 설정")}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={13}>
            <div>
              {activeItem === "내정보 관리" && (
                <ProfileAccountModifyView
                  account={account}
                  onModifyAccount={onModifyAccount}
                />
              )}
              {activeItem === "비밀번호 변경" && (
                <ProfileModifyView
                  account={account}
                  onModifyAccount={onModifyAccount}
                />
              )}
              {activeItem === "소개글 수정" && (
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;소개글
                  수정
                </p>
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
