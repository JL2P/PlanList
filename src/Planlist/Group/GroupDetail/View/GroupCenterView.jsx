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
        onLogInUser,
        memberList
    }) => {

    return (
        <div>
            <DetailGroupNav 
                onLogInUser={onLogInUser}
                detailGroup={detailGroup} 
            />
            <Route 
                path={`/groupdetail/${detailGroup.id}/`} 
                exact 
                render={() => <DetailGroupAll
                     sampleData={sampleData}
                     onDetailGroup_create={onDetailGroup_create}
                     getDetailGroup_modalOpen={getDetailGroup_modalOpen}
                     onDetailGroup_modalCheck={onDetailGroup_modalCheck}
                     onLogInUser={onLogInUser}
                     detailGroup={detailGroup}
                /> } />
            <Route 
                path={`/groupdetail/${detailGroup.id}/member`} 
                exact 
                render={() => <DetailGroupMember
                    detailGroup={detailGroup}
                    memberList={memberList}
                />} />
            <Route
                path={`/groupdetail/${detailGroup.id}/masterSetting`} 
                exact
                render={() => <DetailGroupSettingM
                    detailGroup={detailGroup}
                    onSettingSave={onSettingSave}
                    onSettingRemove={onSettingRemove}
                />}
            />
            <Route
                path={`/groupdetail/${detailGroup.id}/userSetting`} 
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