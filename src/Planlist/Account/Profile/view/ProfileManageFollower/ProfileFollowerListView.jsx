import React from 'react';
import { Divider, Header, Item } from 'semantic-ui-react';
import ProfileFollowerView from './ProfileFollowerView';

const array = [{ id: 1}, { id: 2},{ id: 3},{ id: 4}, { id: 5},{ id: 6}];
const element = array.map((item) => <ProfileFollowerView />);
const ProfileFollowerListView = () => {
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
  };

export default ProfileFollowerListView;