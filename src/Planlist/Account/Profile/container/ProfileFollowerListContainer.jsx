import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import {Header, Item} from 'semantic-ui-react'
import ProfileFollowerView from "../view/ProfileManageFollower/ProfileFollowerView";

@inject("Store")
@observer
class ProfileFollowerListContainer extends Component {

   // follow function
    follow =(follow)=>{
        //팔로우 한다
        
    }

    render(){
        const array = [{ id: 1}, { id: 2},{ id: 3},{ id: 4}, { id: 5},{ id: 6}];
        const element = array.map((item) => <ProfileFollowerView follow={this.follow}/>);   

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