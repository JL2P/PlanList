import React from 'react';
import { Image, Button, Card } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const GroupProfilView = ({
        onLogInUser,
        group,
        detailGroup_memberLength,
        detailGroup_memberList,
        onGroupJoin,
        memberConfirm,
        memberManager,
        onMemberRemove,
        groupGallery
    }) => {
        console.log(groupGallery)

    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일

    const newToday = `${year}.${month}.${date}`

    const accountId = onLogInUser.accountId;
    const groupId = group.id;
    const confirm = memberConfirm;
    const manager = memberManager;

    let memberDetail = "";
    let masterMember = "";

    const joinBtn = detailGroup_memberList.map((member) => {
        if(member.manager === "true"){
            masterMember = member;
        }
        if(member.accountId === onLogInUser.accountId){
            memberDetail = member;
            console.log(memberDetail.confirm)
        }
    })

    return (
        <Card style={{padding:"1rem"}}>
            <Image src={groupGallery ? groupGallery : group.imgUrl} style={{borderRadius:"10px",marginBottom:"1rem"}}/>
            <p style={{fontSize:"1.2rem", fontWeight:"bold", wordBreak:"break-all"}}>{group.title}</p>
            <p>그룹장 : <Link to={`/account/${masterMember.accountId}`} style={{fontSize:"1.2rem",color:"#8c8c8c"}}>{group.master}</Link></p>
            <p>멤버 : {detailGroup_memberLength}명</p> 
            <p style={{wordBreak:"break-all"}}>{group.description}</p>
            {memberDetail.accountId === onLogInUser.accountId && memberDetail.confirm === "true"  ? "" 
            : memberDetail.accountId === onLogInUser.accountId && memberDetail.confirm === "false"  ?
                (   
                    <>
                        <Button inverted color='orange' onClick={() => onMemberRemove(group.id,memberDetail.id)}>그룹가입 신청 중입니다.</Button>
                        <p><small>신청을 취소하시려면 Click</small></p>
                    </>
                ) :
                (
                    <Button inverted color='orange' onClick={(e) => onGroupJoin(e,{
                        accountId,
                        groupId,
                        confirm,
                        manager,
                        date:`${newToday}`
                    })}>
                        그룹 가입하기
                    </Button>
                ) 
            }
        </Card>
    );
};

export default GroupProfilView;