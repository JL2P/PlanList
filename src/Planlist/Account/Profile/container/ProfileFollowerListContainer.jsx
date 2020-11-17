import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import {Header, Item} from 'semantic-ui-react'
import ProfileFollowerView from "../view/ProfileManageFollower/ProfileFollowerView";


@inject("Store")
@observer
class ProfileFollowerListContainer extends Component {

    componentDidMount(){
        const {follow} = this.props.Store;
       
    
      }
    onFollowRefuse = (followId) => {
        alert("삭제되었습니다.");
        const { follow } = this.props.Store;
        follow.followRefuse(followId);
    }

    onIsFollowing = (followId) => {
        const { follow } = this.props.Store;
        follow.followingCheck(followId);
    }    

    render(){
        const { account, follow } = this.props.Store;
        const myFollowers = follow.getMyFollowers;
        
        console.log("myFollowers")
        console.log(myFollowers)
        const element = myFollowers.map((follower) => <ProfileFollowerView key={follower.accountId} 
        follower={follower} 
        isFollowing={follow.getIsFollowing} 
        onFollowRefuse={this.onFollowRefuse}
        onIsFollowing={this.onIsFollowing}
        
       />);   
        
        
        
        console.log(element)
        return (
            <div style={{height:"600px", textAlign:"center"}}>
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