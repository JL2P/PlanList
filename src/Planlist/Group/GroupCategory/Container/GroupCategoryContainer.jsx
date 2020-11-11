import React, { Component } from 'react';
import GroupCategoryContents from '../View/GroupCategoryContents'
import GroupCategoryNav from '../View/GroupCategoryNav'
import { inject, observer } from "mobx-react";
import { Grid } from 'semantic-ui-react'

@inject("Store")
@observer
class GroupCategoryContainer extends Component {

    onCategoryList_select = (item) => {
        const { group } = this.props.Store;
        group.categoryList_select(item);
    }

    //그룹 전체 리스트 조회
    onAllGroups = () => {
        const { group } = this.props.Store;
        group.getApiGroups();
    }
    //그룹 디테일 조회
    onGroupDetail_page = (groupId) => {
        const { group } = this.props.Store;
        const { account } = this.props.Store;
        group.groupDetail_page(groupId,account.loginAccount.accountId);
    }

    render() {
        const location = this.props.location;
        const { group } = this.props.Store;
        const {
            getCategoryList,
            getSelect_Group_categoryList,
            getGroups
        } = group;

        return (
            <Grid divided style={{marginLeft:"0",marginTop:"0"}}>
                <Grid.Row style={{paddingTop:"0"}}>
                <Grid.Column  width={3} style={{padding:"0"}}>
                    <GroupCategoryNav 
                        sampleData={getCategoryList}
                        selectList={getSelect_Group_categoryList}
                        onCategoryList_select={this.onCategoryList_select}
                    />
                </Grid.Column>
                <Grid.Column  width={13} style={{padding:"2rem 3rem"}}>
                    <GroupCategoryContents 
                        groups={getGroups}
                        selectList={getSelect_Group_categoryList}
                        onAllGroups={this.onAllGroups}
                        location={location}
                        onGroupDetail_page={this.onGroupDetail_page}
                    />
                </Grid.Column>
                </Grid.Row>
            </Grid>

        );
    }
}

export default GroupCategoryContainer;