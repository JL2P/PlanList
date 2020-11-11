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

    render() {
        const location = this.props.location;
        const { group } = this.props.Store;
        const {
            getCategoryList,
            getSelect_Group_categoryList,
            getGroup,
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
                        GroupsData={getGroups}
                        selectList={getSelect_Group_categoryList}
                        onAllGroups={this.onAllGroups}
                        location={location}
                        group={group}
                    />
                </Grid.Column>
                </Grid.Row>
            </Grid>

        );
    }
}

export default GroupCategoryContainer;