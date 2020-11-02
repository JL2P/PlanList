import React, { Component } from 'react';
import MyGroupView from '../View/MyGroupView';
import BestGroupView from '../View/BestGroupView';
import CategoryGroupView from '../View/CategoryGroupView';
import RecommendGroupView from '../View/RecommendGroupView';
import { inject, observer } from "mobx-react";


@inject("Store")
@observer
class GroupContainer extends Component {

    //그룹 생성
    onCreateGroup = (e, createObj) => {
        e.preventDefault();
        const { group } = this.props.Store;
        group.createGroup(createObj);
        this.props.history.push(`/groupDetail/`);
    }

    //그룹 전체 리스트 조회
    onAllGroups = () => {
        const { group } = this.props.Store;
        group.getApiGroups();
    }
    //그룹 디테일 조회
    onGroupDetail_page = (groupId) => {
        const { group } = this.props.Store;
        group.groupDetail_page(groupId);
    }
    //카테고리 사진 클릭시 getSelect_Group_categoryList 변경
    onCategorySelect = (category) => {
        const { group } = this.props.Store;
        group.select_Group_categoryList = category
    }
    //그룹 메뉴에서 '모두보기' 클릭시 카테고리 페이지 기본값
    onCategoryDefault = (categoryList) => {
        const { group } = this.props.Store;
        group.select_Group_categoryList = categoryList;
    }

    render() {
        const { group } = this.props.Store;
        const { account } = this.props.Store;
        const my_sampleData = group.getMyTodo;
        const best_sampleData = group.getBestTodo;

        const {
            getGroups,
            getDetailGroup_open,
            getCategoryList,
        } = group

        const {loginAccount} = account;
         
        return (
            <div>
                <MyGroupView 
                    sampleData={my_sampleData} 
                    categoryList={getCategoryList}
                    onCreateGroup={this.onCreateGroup}
                    onCategoryDefault={this.onCategoryDefault}
                    onLogInUser={loginAccount}
                />
                <BestGroupView 
                    categoryList={getCategoryList}
                    sampleData={best_sampleData}
                    onCategoryDefault={this.onCategoryDefault}
                />
                <CategoryGroupView 
                    categoryList={getCategoryList} 
                    onCategorySelect={this.onCategorySelect}
                    onCategoryDefault={this.onCategoryDefault}
                />
                <RecommendGroupView
                    groups={getGroups} 
                    onAllGroups={this.onAllGroups}
                    onGroupDetail_page={this.onGroupDetail_page}
                    onCategoryDefault={this.onCategoryDefault}
                />
            </div>
        );
    }
}

export default GroupContainer;
