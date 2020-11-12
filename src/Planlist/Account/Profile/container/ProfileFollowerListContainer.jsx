import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import {Header, Item} from 'semantic-ui-react'
import ProfileFollowerView from "../view/ProfileManageFollower/ProfileFollowerView";


@inject("Store")
@observer
class ProfileFollowerListContainer extends Component {

  
      componentDidMount() {
        const {follow} = this.props.Store;
        follow.getApiMyFollowers();
        
      }
      
 
    render(){
        const { account, follow } = this.props.Store;
        const myFollowers = follow.getMyFollowers;
        console.log("myFollowers")
        console.log(myFollowers)
        const element = myFollowers.map((follower) => <ProfileFollowerView follower={follower} isFollowing={follow.getIsFollowing}/>);   
        

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