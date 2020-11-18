import React, { useState } from "react";
import {
  Container,
  Image,
  Grid,
  Icon,
  Segment,
  Button,
} from "semantic-ui-react";
// import TestModal from "./TestModal";
import ProfileSettingModalView from "./ProfileManageItem/ProfileSettingModalView";
import ProfileFollowerModalView from "./ProfileManageFollower/ProfileFollowerModalView";
import ProfileFollowingModalView from "./ProfileManageFollowing/ProfileFollowingModalView";

const ProfileManageView = ({
  selectUser,
  loginAccount,
  todo_count,
  loginCheck,
  onSignout,
  onModifyUser,
  onSetAccountProp,
  onDeleteUser,
  onFollow,
  isFollowed,
  isFollowing,
  followers,
  followings,
}) => {
  let pText1 = "32px"; // 첫 번째 Row fontSize
  let pText2 = "19px"; // 두 번째 Row fontSize

  // modal open 상태 관리 (true: open, false: hide)
  const [settingOpen, setSettingOpen] = useState(false);
  //팔로워
  const [followerOpen, setFollowerOpen] = useState(false);
  //팔로잉
  const [followingOpen, setFollowingOpen] = useState(false);

  // 하위 컴포넌트인 modal에서 상위컴포넌트인 ProfileManageView의 스테이트를 변경하기 위함
  const onSettingModal = (trigger) => {
    setSettingOpen(trigger);
  };
  //프로팔 팔로워 모달
  const onFollowerModal = (trigger) => {
    setFollowerOpen(trigger);
  };
  //프로필 팔로잉 모달
  const onFollowingModal = (trigger) => {
    setFollowingOpen(trigger);
  };

  const [activeItem, setActiveItem] = useState("내정보 관리");
  const handleItemClick = (activeItem) => {
    setActiveItem(activeItem);
  };

  console.log(followers.length);
  console.log(followings.length);

  return (
    <Container text style={{ marginTop: "3em" }}>
      {/* 모달 추가 기본 open상태는 false */}
      <ProfileSettingModalView
        account={loginAccount}
        settingOpen={settingOpen}
        onSettingModal={onSettingModal}
        activeItem={activeItem}
        handleItemClick={handleItemClick}
        loginCheck={loginCheck}
        onSignout={onSignout}
        onModifyUser={onModifyUser}
        onDeleteUser={onDeleteUser}
        onSetAccountProp={onSetAccountProp}
      />
      {/* 프로필 팔로워 모달 기본 open상태 false */}
      <ProfileFollowerModalView
        followerOpen={followerOpen}
        onFollowerModal={onFollowerModal}
      />
      {/* 프로필 팔로잉 모달 기본 open상태 false */}
      <ProfileFollowingModalView
        followingOpen={followingOpen}
        onFollowingModal={onFollowingModal}
      />

      <Grid stackable>
        <Grid.Row>
          {/* 프로필 이미지 */}
          <Grid.Column width={4}>
            <Image
              src={selectUser.imgUrl}
              bordered
              centered
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Grid.Column>
          {/* 프로필 정보 */}
          <Grid.Column width={12}>
            {/* 첫 번째 행 */}
            <Segment basic>
              <Grid stackable>
                {loginCheck &&
                loginAccount.accountId === selectUser.accountId ? (
                  // 로그인된 사용자 페이지 - setting 아이콘을 보여줌
                  <>
                    {/* 사용자 아이디 */}
                    <Grid.Column width={13} style={{ fontSize: pText1 }}>
                      {selectUser.accountId}
                    </Grid.Column>
                    {/* setting */}
                    <Grid.Column width={2} style={{ fontSize: pText1 }}>
                      <Icon
                        name="setting"
                        onClick={() => onSettingModal(true)}
                      />
                    </Grid.Column>
                  </>
                ) : (
                  // 다른 사용자 페이지 - 팔로우 버튼을 보여줌
                  <>
                    <Grid.Column width={10} style={{ fontSize: pText1 }}>
                      {selectUser.accountId}
                    </Grid.Column>
                    <Grid.Column width={6} style={{ fontSize: pText1 }}>
                      {/* 팔로우 상태일 경우 */}
                      {isFollowed && (
                        <Button
                          primary
                          style={{ background: "#c8c8c8" }}
                          content="팔로우 취소"
                          onClick={() => {
                            alert("팔로우취소");
                          }}
                        />
                      )}
                      {!isFollowed && (
                        <Button
                          primary
                          style={{ background: "#FFB517" }}
                          content="팔로우"
                          onClick={() => {
                            onFollow(selectUser.accountId);
                          }}
                        />
                      )}
                    </Grid.Column>
                  </>
                )}
              </Grid>
            </Segment>
            {/* 두 번째 행 */}
            <Segment basic>
              <Grid stackable style={{ fontSize: pText2 }}>
                {/* 오늘 할일 */}
                <Grid.Column width={5}>
                  해야 할 일 &nbsp; {todo_count}
                </Grid.Column>
                {/* 팔로워 */}
                <Grid.Column width={5}>
                  <span onClick={() => onFollowerModal(true)}>팔로워</span>{" "}
                  &nbsp; {followers.length}
                </Grid.Column>
                {/* 팔로잉 */}
                <Grid.Column width={5}>
                  <span onClick={() => onFollowingModal(true)}>팔로잉</span>
                  &nbsp; {followings.length}
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment basic style={{ paddingTop: "1em" }}>
        {selectUser.introduce}
      </Segment>
    </Container>
  );
};

export default ProfileManageView;
