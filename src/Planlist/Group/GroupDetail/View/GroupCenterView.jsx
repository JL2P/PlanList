import React from 'react';
import DetailGroupNav from './DetailGroupCenter/DetailGroupNav';
import DetailGroupAll from './DetailGroupCenter/DetailGroupAll';
import DetailGroupMember from './DetailGroupCenter/DetailGroupMember';
import DetailGroupSettingM from './DetailGroupCenter/DetailGroupSettingM';
import DetailGroupSettingU from './DetailGroupCenter/DetailGroupSettingU';
import {Route} from 'react-router-dom'

const GroupCenterView = ({
        sampleData,
        onDetailGroup_create,
        getDetailGroup_modalOpen,
        onDetailGroup_modalCheck,
        detailGroup,
        onSettingSave,
        onSettingRemove,
        onLogInUser
    }) => {
    return (
        <div>
            <DetailGroupNav 
                onLogInUser={onLogInUser}
                detailGroup={detailGroup} 
            />
            <Route 
                path="/groupdetail" 
                exact 
                render={() => <DetailGroupAll
                     sampleData={sampleData}
                     onDetailGroup_create={onDetailGroup_create}
                     getDetailGroup_modalOpen={getDetailGroup_modalOpen}
                     onDetailGroup_modalCheck={onDetailGroup_modalCheck}
                     onLogInUser={onLogInUser}
                     detailGroup={detailGroup}
                /> } />
            <Route path="/groupdetail/member" exact component={DetailGroupMember} />
            <Route
                path="/groupdetail/masterSetting" 
                exact
                render={() => <DetailGroupSettingM
                    detailGroup={detailGroup}
                    onSettingSave={onSettingSave}
                    onSettingRemove={onSettingRemove}
                />}
            />
            <Route
                path="/groupdetail/userSetting" 
                exact
                render={() => <DetailGroupSettingU
                    detailGroup={detailGroup}
                    onSettingSave={onSettingSave}
                    onSettingRemove={onSettingRemove}
                />}
            />
        </div>
    );
};

export default GroupCenterView;