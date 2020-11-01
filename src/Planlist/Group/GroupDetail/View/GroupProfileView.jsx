import React,{useEffect} from 'react';
import { Image, Button } from 'semantic-ui-react'

const GroupProfilView = ({sampleData,detailGroup_open}) => {
    useEffect(() => {
        console.log(detailGroup_open)
    },[])
    return (
        <div>
            <Image src={detailGroup_open.imgUrl} style={{borderRadius:"10px",marginBottom:"1rem"}}/>
            <p style={{fontSize:"1.2rem", fontWeight:"bold"}}>{detailGroup_open.title}</p>
            <p>멤버 : {detailGroup_open.rating}명</p>
            <p>{detailGroup_open.description}</p>
            <Button inverted color='orange'>
                그룹 가입하기
            </Button> 
        </div>
    );
};

export default GroupProfilView;