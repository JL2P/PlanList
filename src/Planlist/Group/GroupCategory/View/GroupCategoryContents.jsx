import React, {useEffect,useState} from 'react';
import { Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../GroupStyle/Group.scss";

const GroupCategoryContents = ({
        groups,
        selectList, 
        onAllGroups,
        location,
        onGroupDetail_page,
        myGroups
    }) => {

        let [item, setItem] = useState(16);

        //groups 내림차순 정렬
        const descending = groups.sort(function(a,b){
            return a.id > b.id ? -1 : a.id < b.id ? 1:0;
        })
        
        //내 그룹 16개 제한
        let myGroups_limit = [];
        myGroups.map((myGroup,index) => {
            if(index < item){
                myGroups_limit.push(myGroup);
            }
        })
        //전체 그룹 16개 제한
        let allgroups_limit = [];
        descending.map((group, index) => {
            if(index < item){
                allgroups_limit.push(group);
            }
        })
        //인기 그룹 16개 제한
        let bestgroups_limit = [];
        descending.map((group, index) => {
            if(index < item){
                bestgroups_limit.push(group);
            }
        })

        function handleScroll(){
            let clientHeight = document.documentElement.clientHeight
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
            let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

            if(scrollTop + clientHeight >= scrollHeight){
                setItem(item + 16)
            }
        }

    //추후 전체보기 구현에 사용
    useEffect(() => {
        onAllGroups();
        // scroll event listener 등록
        window.addEventListener("scroll", handleScroll);
        return () => {
            // scroll event listener 해제
            window.removeEventListener("scroll", handleScroll);
        };
      },[item]);

    const myGroupItem = myGroups_limit.map((item,index) => (
        //내 그룹 조회
        <div key={index}>
            <Grid.Column key={index} className="recommendGroup_column" onClick={() => onGroupDetail_page(item.id)}>
                <Link  to={`/groupdetail/${item.id}/`}>
                    <Card className="group_card" raised>
                        <Image src={
                            item.galleries[0] ? item.galleries[0].filePath : item.imgUrl
                        } className="Group_img" />
                    <Card.Content>
                        <Card.Header className="group_Card_header">
                        {item.title}
                        </Card.Header>
                        <Card.Description>member : {item.members.length} 명</Card.Description>
                    </Card.Content>
                    </Card>
                </Link>
            </Grid.Column>
        </div>
    ))
    
    //전체 그룹 조회
    const allGroupItem = allgroups_limit.map((item, index) => (
        <div key={index}>
            <Grid.Column className="recommendGroup_column" onClick={() => onGroupDetail_page(item.id)}>
                <Link to={`/groupdetail/${item.id}/`}>
                    <Card className="group_card" raised>
                        <Image src={
                            item.galleries[0] ? item.galleries[0].filePath : item.imgUrl
                        } className="Group_img" />
                    <Card.Content>
                        <Card.Header className="group_Card_header">
                        {item.title}
                        </Card.Header>
                        <Card.Description>member : {item.members.length} 명</Card.Description>
                    </Card.Content>
                    </Card>
                </Link>
            </Grid.Column>
        </div>
    ))

    //인기 그룹 조회
    const bestGroupItem = bestgroups_limit.map((item, index) => (
        <div key={index}>
            <Grid.Column key={index} className="recommendGroup_column" onClick={() => onGroupDetail_page(item.id)}>
                <Link to={`/groupdetail/${item.id}/`}>
                    <Card className="group_card" raised>
                        <Image src={
                            item.galleries[0] ? item.galleries[0].filePath : item.imgUrl
                        } className="Group_img" />
                    <Card.Content>
                        <Card.Header className="group_Card_header">
                        {item.title}
                        </Card.Header>
                        <Card.Description>member : {item.members.length} 명</Card.Description>
                    </Card.Content>
                    </Card>
                </Link>
            </Grid.Column>
        </div>
    ))

    const GroupCategoryitem = descending.map((item, index) => (
        `/groupcategory/${item.category}` == location.pathname ? (
            // 카테고리별로 조회
            <div key={index}>
                <Grid.Column key={index} className="recommendGroup_column" onClick={() => onGroupDetail_page(item.id)}>
                    <Link  to={`/groupdetail/${item.id}/`}>
                        <Card className="group_card" raised>
                            <Image src={
                                item.galleries[0] ? item.galleries[0].filePath : item.imgUrl
                            } className="Group_img" />
                        <Card.Content>
                            <Card.Header className="group_Card_header">
                            {item.title}
                            </Card.Header>
                            <Card.Description>member : {item.members.length} 명</Card.Description>
                        </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
            </div>
        ) : ""
    ));

    return (
        <div>
            <h2 style={{marginBottom:"2rem"}}>{selectList.text}</h2>
            <Grid columns={4} divided > 
                {/* style={{justifyContent:"center"}} 데이터가 많아지면 추가 */}
                <Grid.Row>
                    {`/groupcategory/myGroup` == location.pathname && myGroupItem}
                    {`/groupcategory/` === location.pathname && allGroupItem}
                    {`/groupcategory/bestGroup` === location.pathname && bestGroupItem}
                    {GroupCategoryitem}
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default GroupCategoryContents;