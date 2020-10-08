import React from "react";
import { Container, Image, Grid, Icon, Segment } from "semantic-ui-react";
import TestModal from "./TestModal";
import ProfileSettingModalView from "./ProfileManageItem/ProfileSettingModalView";

const ProfileManageView = () => {
  let pText1 = "32px"; // 첫 번째 Row fontSize
  let pText2 = "19px"; // 두 번째 Row fontSize

  // modal open 상태 관리 (true: open, false: hide)
  const [open, setOpen] = React.useState(false);

  // 하위 컴포넌트인 modal에서 상위컴포넌트인 ProfileManageView의 스테이트를 변경하기 위함
  const onOpen = (trigger) => {
    setOpen(trigger);
  };

  return (
    <Container text style={{ marginTop: "3em" }}>
      {/* 모달 추가 기본 open상태는 false */}
      <ProfileSettingModalView open={open} onOpen={onOpen} />

      <Grid stackable>
        <Grid.Row>
          {/* 프로필 이미지 */}
          <Grid.Column width={4}>
            <Image src="/profiles/hungry.png" size="small" bordered circular />
          </Grid.Column>
          {/* 프로필 정보 */}
          <Grid.Column width={12}>
            {/* 첫 번째 행 */}
            <Segment basic>
              <Grid stackable>
                {/* 사용자 아이디 */}
                <Grid.Column width={13} style={{ fontSize: pText1 }}>
                  chulchul_2
                </Grid.Column>
                {/* setting */}
                <Grid.Column width={2} style={{ fontSize: pText1 }}>
                  <Icon name="setting" onClick={() => onOpen(true)} />
                </Grid.Column>
              </Grid>
            </Segment>
            {/* 두 번째 행 */}
            <Segment basic>
              <Grid stackable style={{ fontSize: pText2 }}>
                {/* 오늘 할일 */}
                <Grid.Column width={5}>오늘 할 일 &nbsp; 2</Grid.Column>
                {/* 팔로워 */}
                <Grid.Column width={5}>팔로워 &nbsp; 10</Grid.Column>
                {/* 팔로우 */}
                <Grid.Column width={5}>팔로우 &nbsp; 10</Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment basic style={{ paddingTop: "1em" }}>
        소개글 블라블라 어쩌구 저쩌구 ~~~~~~~~~~
      </Segment>
    </Container>
  );
};

export default ProfileManageView;
