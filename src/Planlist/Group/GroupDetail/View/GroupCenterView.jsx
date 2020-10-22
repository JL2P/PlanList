import React from 'react';
import DetailGroupNav from './DetailGroupCenter/DetailGroupNav';
import DetailGroupAll from './DetailGroupCenter/DetailGroupAll';
import DetailGroupMember from './DetailGroupCenter/DetailGroupMember';
import DetailGroupSetting from './DetailGroupCenter/DetailGroupSetting';
import {Route} from 'react-router-dom'

const GroupCenterView = ({sampleData}) => {
    return (
        <div>
            <DetailGroupNav />
            <Route 
                path="/groupdetail/all" 
                exact 
                render={() => <DetailGroupAll sampleData={sampleData} /> } />
            <Route path="/groupdetail/member" exact component={DetailGroupMember} />
            <Route path="/groupdetail/setting" exact component={DetailGroupSetting} />
        </div>
    );
};

export default GroupCenterView;