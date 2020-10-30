import React from 'react';
import DetailGroupNav from './DetailGroupCenter/DetailGroupNav';
import DetailGroupAll from './DetailGroupCenter/DetailGroupAll';
import DetailGroupMember from './DetailGroupCenter/DetailGroupMember';
import DetailGroupSetting from './DetailGroupCenter/DetailGroupSetting';
import {Route} from 'react-router-dom'

const GroupCenterView = ({
        sampleData,
        onDetailGroup_create,
        getDetailGroup_modalOpen,
        onDetailGroup_modalCheck,
        detailGroup,
        onSettingSave,
        onSettingRemove
    }) => {
    return (
        <div>
            <DetailGroupNav />
            <Route 
                path="/groupdetail" 
                exact 
                render={() => <DetailGroupAll
                     sampleData={sampleData}
                     onDetailGroup_create={onDetailGroup_create}
                     getDetailGroup_modalOpen={getDetailGroup_modalOpen}
                     onDetailGroup_modalCheck={onDetailGroup_modalCheck}
                /> } />
            <Route path="/groupdetail/member" exact component={DetailGroupMember} />
            <Route
                path="/groupdetail/setting" 
                exact
                render={() => <DetailGroupSetting
                    detailGroup={detailGroup}
                    onSettingSave={onSettingSave}
                    onSettingRemove={onSettingRemove}
                />}
            />
        </div>
    );
};

export default GroupCenterView;