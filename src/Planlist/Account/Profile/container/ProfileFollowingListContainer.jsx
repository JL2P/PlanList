import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import {Header, Item} from 'semantic-ui-react'
import ProfileFollowingView from "../view/ProfileManageFollowing/ProfileFollowingView";


@inject("Store")
@observer
class ProfileFollowingListContainer extends Component {

    render(){
        const { follow } = this.props.Store;
        const myFollowings = follow.getMyFollowings;
        const element = myFollowings.map((following) => <ProfileFollowingView key={following.accountId} following={following}/>);   

        return (
            <div style={{height:"600px", textAlign:"center"}}>
                <Header as="h3" dividing style={{marginTop:"0.5em"}}>팔로잉</Header>
                <div>
                <Item.Group>
                    {element}
                </Item.Group>
                </div>
            </div>
        );
    }
}



export default ProfileFollowingListContainer;