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
        group,
        onSettingSave,
        onSettingRemove,
        onLogInUser,
        memberList,
        onMemberApply,
        member
    }) => {

    return (
        <div>
            <DetailGroupNav 
                onLogInUser={onLogInUser}
                group={group}
                memberList={memberList}
                member={member}
            />
            <Route 
                path={`/groupdetail/${group.id}/`} 
                exact 
                render={() => <DetailGroupAll
                     sampleData={sampleData}
                     onDetailGroup_create={onDetailGroup_create}
                     getDetailGroup_modalOpen={getDetailGroup_modalOpen}
                     onDetailGroup_modalCheck={onDetailGroup_modalCheck}
                     onLogInUser={onLogInUser}
                     group={group}
                /> } />
            <Route 
                path={`/groupdetail/${group.id}/member`} 
                exact 
                render={() => <DetailGroupMember
                    group={group}
                    memberList={memberList}
                    onMemberApply={onMemberApply}
                />} />
            <Route
                path={`/groupdetail/${group.id}/masterSetting`} 
                exact
                render={() => <DetailGroupSettingM
                    group={group}
                    onSettingSave={onSettingSave}
                    onSettingRemove={onSettingRemove}
                />}
            />
            <Route
                path={`/groupdetail/${group.id}/userSetting`} 
                exact
                render={() => <DetailGroupSettingU
                    group={group}
                    onSettingSave={onSettingSave}
                    onSettingRemove={onSettingRemove}
                />}
            />
        </div>
    );
};

export default GroupCenterView;