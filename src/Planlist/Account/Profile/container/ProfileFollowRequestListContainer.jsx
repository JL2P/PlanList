import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import {Header, Item} from 'semantic-ui-react'
import ProfileFollowerView from "../view/ProfileManageFollower/ProfileFollowerView";


@inject("Store")
@observer
class ProfileFollowRequestListContainer extends Component {

    render(){
        const { follow } = this.props.Store;
        const notConfirmFollowers = follow.getNotConfirmFollowers;
        const element = notConfirmFollowers.map((notConfirmFollower) => <ProfileFollowerView key={notConfirmFollower.accountId} follower={notConfirmFollower}/>);   
        
        return (
            <div style={{height:"600px", textAlign:"center"}}>
                <Header as="h3" dividing style={{marginTop:"0.5em"}}>팔로우 요청</Header>
                <div>
                <Item.Group>
                    {element}
                </Item.Group>
                </div>
            </div>
        );
    }
}



export default ProfileFollowRequestListContainer;