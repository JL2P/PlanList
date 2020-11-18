import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import {Header, Item} from 'semantic-ui-react'
import PofileFollowerContainer from "../container/PofileFollowerContainer"


@inject("Store")
@observer
class ProfileFollowerListContainer extends Component {

    componentDidMount(){
        const {follow} = this.props.Store;
    }


    render(){
        const { account, follow } = this.props.Store;
        const myFollowers = follow.getMyFollowers;
        
        console.log("myFollowers")
        console.log(follow.getIsFollowing)
        console.log(myFollowers)
        const element = myFollowers.map((follower) => <PofileFollowerContainer key={follower.accountId} follower={follower} />);   
        
        
        
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