import React from 'react';
import { Image, Button, Card } from 'semantic-ui-react'

const GroupProfilView = ({
        onLogInUser,
        group,
        detailGroup_memberLength,
        detailGroup_memberList,
        onGroupJoin,
        memberConfirm,
        memberManager,
        onMemberRemove
    }) => {

    const accountId = onLogInUser.accountId;
    const groupId = group.id;
    const confirm = memberConfirm;
    const manager = memberManager;

    let memberDetail = "";

    const joinBtn = detailGroup_memberList.map((member) => {
        if(member.accountId === onLogInUser.accountId){
            memberDetail = member;
            console.log(memberDetail.confirm)
        }
    })

    return (
        <Card style={{padding:"1rem"}}>
            <Image src="/posts/test_img_1.jpg" style={{borderRadius:"10px",marginBottom:"1rem"}}/>
            <p style={{fontSize:"1.2rem", fontWeight:"bold"}}>{group.title}</p>
            <p>멤버 : {detailGroup_memberLength}명</p>
            <p>{group.description}</p>
            {memberDetail.accountId === onLogInUser.accountId && memberDetail.confirm === "true"  ? "" 
            : memberDetail.accountId === onLogInUser.accountId && memberDetail.confirm === "false"  ?
                (   
                    <>
                        <Button inverted color='orange' onClick={() => onMemberRemove(memberDetail.id)}>그룹가입 신청 중입니다.</Button>
                        <p><small>신청을 취소하시려면 Click</small></p>
                    </>
                ) :
                (
                    <Button inverted color='orange' onClick={(e) => onGroupJoin(e,{
                        accountId,
                        groupId,
                        confirm,
                        manager
                    })}>
                        그룹 가입하기
                    </Button>
                ) 
            }
        </Card>
    );
};

export default GroupProfilView;