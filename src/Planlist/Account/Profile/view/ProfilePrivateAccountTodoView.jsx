import React, { Component } from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";
import ProfileFollowerModalView from "./ProfileManageFollower/ProfileFollowerModalView";
import ProfileFollowingModalView from "./ProfileManageFollowing/ProfileFollowingModalView";


class ProfilePrivateAccountTodoView extends Component {
  render() {

    const { accountId, selectUser,onFollow,isFollowed, onDeleteMyFollowing } = this.props;
    console.log(selectUser);
    console.log("금나와라 뚝딱", isFollowed);
    return (
      <Container style={{ width: "900px", marginTop: "2em" }}>
        <Segment textAlign="center">
          <Header style={{ marginTop: "15px" }}>비공개 계정입니다</Header>
          {accountId}님의 계획을 보려면 팔로우 하세요
          <Segment.Inline style={{ marginTop: "15px" }}>
             {/* 팔로우 상태일 경우 */}
                      {isFollowed && (
                        <Button
                          primary
                          style={{ background: "#c8c8c8" }}
                          content="팔로우 취소"
                          onClick={() => {
                           
                            onDeleteMyFollowing(selectUser.accountId);
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
                      </Segment.Inline>
                    </Segment>
                  </Container>
                );
            }
          }

export default ProfilePrivateAccountTodoView;
