import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import {Header, Item} from 'semantic-ui-react'
import ProfileFollowerView from "../view/ProfileManageFollower/ProfileFollowerView";


@inject("Store")
@observer
class ProfileFollowerListContainer extends Component {

    render(){
        const { account, follow } = this.props.Store;
        const myFollowers = follow.getMyFollowers;
        console.log("myFollowers")
        console.log(myFollowers)
        const element = myFollowers.map((follower) => <ProfileFollowerView key={follower.accountId} follower={follower} isFollowing={follow.getIsFollowing}/>);   
    
        
        console.log(element)
        return (
            <div style={{height:"600px", textAlign:"center"}}>
                <Header as="h3" dividing style={{marginTop:"0.5em"}}>팔로워</Header>
                <div>
                <Item.Group>
                    {element}
                </Item.Group>
                </div>
            </div>
        );
    }
}



export default ProfileFollowerListContainer;