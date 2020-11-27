import React, { Component } from "react";
import MyGroupView from "../View/MyGroupView";
import BestGroupView from "../View/BestGroupView";
import CategoryGroupView from "../View/CategoryGroupView";
import RecommendGroupView from "../View/RecommendGroupView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class GroupContainer extends Component {
  //그룹 생성
  onCreateGroup = (e, createObj, fileObj) => {
    e.preventDefault();
    const { group } = this.props.Store;
    group
      .createGroup(createObj, fileObj)
      .then(() => this.props.history.push(`/groupDetail/${group.getGroupId}/`));
  };

  //그룹 전체 리스트 조회, 멤버 전체 리스트 조회
  componentDidMount() {
    const { group } = this.props.Store;
    group.getApiGroups();
    group.memberListAll();
  }

  //그룹 디테일 조회
  onGroupDetail_page = (groupId) => {
    const { group } = this.props.Store;
    const { account } = this.props.Store;
    group.groupDetail_page(groupId, account.loginAccount.accountId);
  };
  //카테고리 사진 클릭시 getSelect_Group_categoryList 변경
  onCategorySelect = (category) => {
    const { group } = this.props.Store;
    group.select_Group_categoryList = category;
  };
  //그룹 메뉴에서 '모두보기' 클릭시 카테고리 페이지 기본값
  onCategoryDefault = (categoryList) => {
    const { group } = this.props.Store;
    group.select_Group_categoryList = categoryList;
  };
  //로드시 myGroup 데이터 받아오기
  onMyGroups = (myGroups) => {
    const { group } = this.props.Store;
    group.myGroups_array(myGroups);
  };

  render() {
    const { group } = this.props.Store;
    const { account } = this.props.Store;

    const { getGroups, getCategoryList, getMembers } = group;
    const { loginAccount } = account;
    return (
      <div>
        <MyGroupView
          groups={getGroups}
          onGroupDetail_page={this.onGroupDetail_page}
          categoryList={getCategoryList}
          onCreateGroup={this.onCreateGroup}
          onCategoryDefault={this.onCategoryDefault}
          onLogInUser={loginAccount}
          members={getMembers}
          onMyGroups={this.onMyGroups}
        />

        <BestGroupView
          groups={getGroups}
          categoryList={getCategoryList}
          onGroupDetail_page={this.onGroupDetail_page}
          onCategoryDefault={this.onCategoryDefault}
        />

        <CategoryGroupView
          categoryList={getCategoryList}
          onCategorySelect={this.onCategorySelect}
          onCategoryDefault={this.onCategoryDefault}
        />

        {getGroups.length > 0 && (
          <RecommendGroupView
            groups={getGroups}
            categoryList={getCategoryList}
            onGroupDetail_page={this.onGroupDetail_page}
            onCategoryDefault={this.onCategoryDefault}
          />
        )}
      </div>
    );
  }
}

export default GroupContainer;
