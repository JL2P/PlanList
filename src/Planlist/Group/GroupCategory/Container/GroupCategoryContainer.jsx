import React, { Component } from 'react';
import GroupCategoryContents from '../View/GroupCategoryContents'
import GroupCategoryNav from '../View/GroupCategoryNav'
import { inject, observer } from "mobx-react";
import { Grid, Image } from 'semantic-ui-react'

@inject("Store")
@observer
class GroupCategoryContainer extends Component {
    render() {
        return (
            <Grid divided>
                <Grid.Row>
                <Grid.Column  width={4}>
                    <GroupCategoryContents />
                </Grid.Column>
                <Grid.Column  width={12}>
                    <GroupCategoryNav />
                </Grid.Column>
                </Grid.Row>
            </Grid>

        );
    }
}

export default GroupCategoryContainer;