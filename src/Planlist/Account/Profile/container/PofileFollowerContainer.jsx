import React, { Component } from 'react';
import ProfileFollowerView from '../view/ProfileManageFollower/ProfileFollowerView'
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class PofileFollowerContainer extends Component {

    componentDidMount(){
        const {follower} = this.props;
        const { follow } = this.props.Store;
        follow.followingCheck(follower.accountId);
        
    }


    onFollowRefuse = (followId) => {
        alert("삭제되었습니다.");
        const { follow } = this.props.Store;
        follow.followRefuse(followId);
    }


    render() {
        const {follower} = this.props
        const { follow } = this.props.Store;


        //follower True Following True
        // 팔로우 취소버튼
        //follower false Following True
        // 팔로우하기 버튼

        

        return (
            <ProfileFollowerView
            follower={follower} 
            isFollowing={follow.getIsFollowing} 
            onFollowRefuse={this.onFollowRefuse}
            />
            );
    }
}

export default PofileFollowerContainer;