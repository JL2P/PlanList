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

    render() {
        const { group } = this.props.Store;
        const my_sampleData = group.getMyTodo;
        const best_sampleData = group.getBestTodo;

        const {
            getGroups,
            getDetailGroup_open,
            getCategoryList,
        } = group
        
        return (
            <div>
                <MyGroupView 
                    sampleData={my_sampleData} 
                    categoryList={getCategoryList}
                    onCreateGroup={this.onCreateGroup}
                />
                <BestGroupView sampleData={best_sampleData} />
                <CategoryGroupView 
                    categoryList={getCategoryList} 
                    onCategorySelect={this.onCategorySelect}
                />
                <RecommendGroupView
                    groups={getGroups} 
                    onAllGroups={this.onAllGroups}
                    onGroupDetail_page={this.onGroupDetail_page}
                />
            </div>
        );
    }
}

export default GroupContainer;
