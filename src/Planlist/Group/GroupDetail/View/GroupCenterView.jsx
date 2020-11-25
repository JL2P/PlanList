import React from "react";
import DetailGroupNav from "./DetailGroupCenter/DetailGroupNav";
import DetailGroupAll from "./DetailGroupCenter/DetailGroupAll";
import DetailGroupMember from "./DetailGroupCenter/DetailGroupMember";
import DetailGroupSettingM from "./DetailGroupCenter/DetailGroupSettingM";
import DetailGroupSettingU from "./DetailGroupCenter/DetailGroupSettingU";
import { Route } from "react-router-dom";
import DetailGroupAllContainer from "../Container/DetailGroupAllContainer";

const GroupCenterView = ({

  group,
  onSettingSave,
  onSettingRemove,
  onLogInUser,
  memberList,
  onMemberApply,
  member,
  onMemberRemove,
  onMemberRemove_user,
  members,
  activeItem,
  onHandleItemClick,
  onManagerTransfer
}) => {
  return (
    <div>
      <DetailGroupNav
        onLogInUser={onLogInUser}
        group={group}
        memberList={memberList}
        member={member}
        activeItem={activeItem}
        onHandleItemClick={onHandleItemClick}
      />
      {/* 승훈 수정 기존 View를 Container 태우고 그 다음에 View호출하도록 변경 */}
      {/* <Route
        path={`/groupdetail/:${group.id}`}
        exact
        render={(match = { match }) => (
          <DetailGroupAll
            onDetailGroup_create={onDetailGroup_create}
            getDetailGroup_modalOpen={getDetailGroup_modalOpen}
            onDetailGroup_modalCheck={onDetailGroup_modalCheck}
            onLogInUser={onLogInUser}
            group={group}
            groupTodoList={groupTodoList}
            categoryList={categoryList}
            match={match}
          />
        )}
      /> */}
      <Route
        path={`/groupdetail/${group.id}`}
        exact
        render={() => <DetailGroupAllContainer member={member} groupId={group.id} />}
      />
      <Route
        path={`/groupdetail/${group.id}/member`}
        exact
        render={() => (
          <DetailGroupMember
            group={group}
            memberList={memberList}
            onMemberApply={onMemberApply}
            onMemberRemove={onMemberRemove}
            members={members}
            member={member}
            onManagerTransfer={onManagerTransfer}
          />
        )}
      />
      <Route
        path={`/groupdetail/${group.id}/masterSetting`}
        exact
        render={() => (
          <DetailGroupSettingM
            group={group}
            onSettingSave={onSettingSave}
            onSettingRemove={onSettingRemove}
          />
        )}
      />
      <Route
        path={`/groupdetail/${group.id}/userSetting`}
        exact
        render={() => (
          <DetailGroupSettingU
            group={group}
            member={member}
            onSettingSave={onSettingSave}
            onSettingRemove={onSettingRemove}
            onMemberRemove_user={onMemberRemove_user}
          />
        )}
      />
    </div>
  );
};

export default GroupCenterView;
